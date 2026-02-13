'use client'

import type React from 'react'
import { trackGoal } from '@/lib/fathom-goals'

type TrackedLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  goal: keyof typeof import('@/lib/fathom-goals').FATHOM_GOALS
}

export function TrackedLink({ goal, onClick, className, href, ...props }: TrackedLinkProps) {
  return (
    <a
      {...props}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ??
        'inline-flex items-center gap-2 bg-transparent border-2 border-gold text-gold font-bold px-6 py-3 rounded-lg hover:bg-gold hover:text-navy transition-all'
      }
      onClick={(event) => {
        trackGoal(goal)
        onClick?.(event)
      }}
    />
  )
}
