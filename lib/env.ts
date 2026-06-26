function getEnvVar(key: string): string {
  const value = process.env[key]
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`)
  }
  return value
}

export const env = {
  get RESEND_API_KEY() {
    return getEnvVar('RESEND_API_KEY')
  },
  get RESEND_EMAIL_FROM() {
    return getEnvVar('RESEND_EMAIL_FROM')
  },
  // The segment readers land in when they sign up from the book QR page.
  get RESEND_SEGMENT_ID() {
    return getEnvVar('RESEND_SEGMENT_ID')
  },
  // Secret that unlocks /bonus. Handed out only in the welcome email and the
  // post-signup redirect, so the bonus content can't be reached without signing up.
  get BONUS_TOKEN() {
    return getEnvVar('BONUS_TOKEN')
  },
  get NEXT_PUBLIC_URL() {
    return process.env.NEXT_PUBLIC_URL ?? 'https://www.softwarecafrers.com'
  },
}
