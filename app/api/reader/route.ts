import { type NextRequest, NextResponse } from 'next/server'
import { env } from '@/lib/env'
import { isValidEmail, subscribeReader } from '@/lib/newsletter/subscribe-reader'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (typeof email !== 'string' || !isValidEmail(email)) {
      return NextResponse.json({ error: 'Introduce un email válido' }, { status: 400 })
    }

    const result = await subscribeReader(email.trim().toLowerCase())

    return NextResponse.json({
      message: result.alreadySubscribed
        ? 'Ya estabas en el rebaño. Te llevamos a tus bonus.'
        : '¡Bienvenido al rebaño! Tienes los bonus aquí y también en tu correo.',
      alreadySubscribed: result.alreadySubscribed,
      // Lets the form unlock /bonus immediately, without waiting for the email.
      redirectUrl: `/bonus?token=${env.BONUS_TOKEN}`,
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Error interno'
    console.error('[reader/subscribe]', message)
    return NextResponse.json({ error: 'No hemos podido apuntarte. Inténtalo de nuevo en un momento.' }, { status: 500 })
  }
}
