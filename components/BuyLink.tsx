'use client'

import type React from 'react'
import { trackGoal } from '@/lib/fathom-goals'

const BUY_URL = 'https://savvily.es/libros/software-cafrers/?utm_source=softwarecafrers.com'

const sizes = {
  sm: 'font-bold text-xs sm:text-sm px-4 py-1.5 rounded-lg',
  md: 'font-bold px-6 py-3 rounded-lg',
  lg: 'font-black text-lg px-8 py-4 rounded-xl',
  xl: 'font-black text-lg sm:text-xl px-10 py-4 rounded-xl',
} as const

const layouts = {
  inline: 'inline-flex items-center gap-2',
  block: 'block w-full text-center',
} as const

const animations = {
  none: '',
  pulse: 'animate-pulse-gold',
  urgent: 'animate-urgent-pulse',
} as const

type BuyLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'rel'> & {
  goal: keyof typeof import('@/lib/fathom-goals').FATHOM_GOALS
  size?: keyof typeof sizes
  layout?: keyof typeof layouts
  animation?: keyof typeof animations
  withScale?: boolean
  withShadow?: boolean
}

export function BuyLink({
  goal,
  size = 'md',
  layout = 'inline',
  animation = 'none',
  withScale,
  withShadow,
  onClick,
  className,
  ...rest
}: BuyLinkProps) {
  const classes = [
    'bg-gold text-navy hover:bg-gold-dark transition-all',
    sizes[size],
    layouts[layout],
    animations[animation],
    withScale && 'hover:scale-105',
    withShadow && 'shadow-lg shadow-gold/20',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <a
      href={BUY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
      {...rest}
      onClick={(event) => {
        trackGoal(goal)
        onClick?.(event)
      }}
    />
  )
}
