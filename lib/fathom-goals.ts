'use client'

import { trackEvent } from 'fathom-client'

export const FATHOM_GOALS = {
  buyHero: 'buyHero',
  buyAboutBook: 'buyAboutBook',
  buyHeader: 'buyHeader',
  buyGuarantees: 'buyGuarantees',
  buySection: 'buySection',
  buyModal: 'buyModal',
  buyChatbot: 'buyChatbot',
  sampleDownload: 'sampleDownload',
  chatbotOpen: 'chatbotOpen',
  videoPlay: 'videoPlay',
} as const

export function trackGoal(goal: keyof typeof FATHOM_GOALS) {
  const goalId = FATHOM_GOALS[goal]
  if (!goalId) return
  trackEvent(goalId)
}
