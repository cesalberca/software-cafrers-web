import type { ReactElement } from 'react'
import { Resend } from 'resend'
import { env } from '@/lib/env'
import { BonusEmail } from '@/lib/newsletter/emails/bonus-email'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export interface SubscribeReaderResult {
  alreadySubscribed: boolean
}

export function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email)
}

export async function subscribeReader(email: string): Promise<SubscribeReaderResult> {
  const resend = new Resend(env.RESEND_API_KEY)

  // Single opt-in: add the reader to one segment. No Topics: there is a single newsletter,
  // so a plain subscribe/unsubscribe is enough. Use a dedicated segment here if you want to
  // know who came from the book QR.
  const contactResult = await resend.contacts.create({
    email,
    segments: [{ id: env.RESEND_SEGMENT_ID }],
  })

  let alreadySubscribed = false

  if (contactResult.error) {
    const message = contactResult.error.message?.toLowerCase() ?? ''
    if (message.includes('already exists') || message.includes('duplicate')) {
      alreadySubscribed = true
    } else {
      throw new Error(contactResult.error.message)
    }
  }

  // The bonus delivery email doubles as the welcome. Resend the link even to people who were
  // already subscribed, since they scanned the QR to get the bonus. A failed email must not
  // fail the whole request.
  try {
    const { error: emailError } = await resend.emails.send({
      from: env.RESEND_EMAIL_FROM,
      to: email,
      subject: 'Tu bonus cafre 🐐',
      replyTo: env.RESEND_EMAIL_FROM,
      react: BonusEmail({
        bonusUrl: `${env.NEXT_PUBLIC_URL}/bonus?token=${env.BONUS_TOKEN}`,
      }) as ReactElement,
    })
    // resend.emails.send resolves with { error } instead of throwing on API errors,
    // so this must be checked explicitly or failures vanish silently.
    if (emailError) {
      console.error('[reader] Resend rejected the bonus email:', emailError)
    }
  } catch (error) {
    console.error('[reader] Threw while sending the bonus email:', error)
  }

  return { alreadySubscribed }
}
