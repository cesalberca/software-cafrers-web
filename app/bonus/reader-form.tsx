'use client'

import { type FormEvent, useState } from 'react'
import { trackGoal } from '@/lib/fathom-goals'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function ReaderForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [message, setMessage] = useState('')
  const [redirectUrl, setRedirectUrl] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email || status === 'loading') return

    setStatus('loading')
    try {
      const res = await fetch('/api/reader', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()

      if (res.ok) {
        trackGoal('readerSignup')
        setStatus('success')
        setMessage(data.message ?? '¡Listo! Revisa tu correo.')
        setRedirectUrl(data.redirectUrl ?? '')
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.error ?? 'Algo ha salido mal.')
      }
    } catch {
      setStatus('error')
      setMessage('Algo ha salido mal. Inténtalo de nuevo.')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-gold/30 bg-gold/5 p-6 text-center">
        <div className="mb-2 text-4xl">🐐</div>
        <p className="mb-4 text-white/90">{message}</p>
        {redirectUrl && (
          <a
            href={redirectUrl}
            className="inline-flex items-center justify-center rounded-xl bg-gold px-6 py-3 font-black text-navy transition-all hover:bg-gold-dark hover:scale-105"
          >
            Ver mis bonus ahora
          </a>
        )}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
          required
          autoComplete="email"
          aria-label="Tu email"
          className="flex-1 rounded-xl border border-gold/20 bg-navy-light/40 px-4 py-3 text-white placeholder:text-white/30 outline-none focus:border-gold/60"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="rounded-xl bg-gold px-6 py-3 font-black text-navy transition-all hover:bg-gold-dark hover:scale-105 disabled:opacity-70 disabled:hover:scale-100"
        >
          {status === 'loading' ? 'Apuntándote...' : 'Quiero el bonus'}
        </button>
      </div>

      {status === 'error' && <p className="text-sm text-red-400">{message}</p>}

      <p className="text-xs text-white/40">Te apuntas a la newsletter de César. Nada de spam, baja cuando quieras.</p>
    </form>
  )
}
