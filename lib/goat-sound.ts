let audioCtx: AudioContext | null = null

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    audioCtx = new AudioContext()
  }
  return audioCtx
}

export function playGoatSound() {
  const ctx = getAudioContext()
  const now = ctx.currentTime

  // Create a "beeeh" goat sound using oscillators
  const osc1 = ctx.createOscillator()
  const osc2 = ctx.createOscillator()
  const gain = ctx.createGain()

  osc1.type = 'sawtooth'
  osc1.frequency.setValueAtTime(420, now)
  osc1.frequency.linearRampToValueAtTime(380, now + 0.1)
  osc1.frequency.linearRampToValueAtTime(450, now + 0.2)
  osc1.frequency.linearRampToValueAtTime(350, now + 0.4)
  osc1.frequency.linearRampToValueAtTime(300, now + 0.6)

  osc2.type = 'square'
  osc2.frequency.setValueAtTime(210, now)
  osc2.frequency.linearRampToValueAtTime(190, now + 0.1)
  osc2.frequency.linearRampToValueAtTime(225, now + 0.2)
  osc2.frequency.linearRampToValueAtTime(175, now + 0.4)
  osc2.frequency.linearRampToValueAtTime(150, now + 0.6)

  gain.gain.setValueAtTime(0, now)
  gain.gain.linearRampToValueAtTime(0.15, now + 0.05)
  gain.gain.setValueAtTime(0.15, now + 0.15)
  gain.gain.linearRampToValueAtTime(0.1, now + 0.3)
  gain.gain.linearRampToValueAtTime(0.08, now + 0.5)
  gain.gain.linearRampToValueAtTime(0, now + 0.7)

  osc1.connect(gain)
  osc2.connect(gain)
  gain.connect(ctx.destination)

  osc1.start(now)
  osc2.start(now)
  osc1.stop(now + 0.7)
  osc2.stop(now + 0.7)
}

export function playGoatSoundLong() {
  const ctx = getAudioContext()
  const now = ctx.currentTime

  // Longer "beeeeeeh" for book reveal
  const osc1 = ctx.createOscillator()
  const osc2 = ctx.createOscillator()
  const gain = ctx.createGain()

  osc1.type = 'sawtooth'
  osc1.frequency.setValueAtTime(400, now)
  osc1.frequency.linearRampToValueAtTime(440, now + 0.15)
  osc1.frequency.setValueAtTime(440, now + 0.5)
  osc1.frequency.linearRampToValueAtTime(380, now + 0.8)
  osc1.frequency.linearRampToValueAtTime(320, now + 1.2)

  osc2.type = 'square'
  osc2.frequency.setValueAtTime(200, now)
  osc2.frequency.linearRampToValueAtTime(220, now + 0.15)
  osc2.frequency.setValueAtTime(220, now + 0.5)
  osc2.frequency.linearRampToValueAtTime(190, now + 0.8)
  osc2.frequency.linearRampToValueAtTime(160, now + 1.2)

  gain.gain.setValueAtTime(0, now)
  gain.gain.linearRampToValueAtTime(0.12, now + 0.05)
  gain.gain.setValueAtTime(0.12, now + 0.4)
  gain.gain.linearRampToValueAtTime(0.08, now + 0.8)
  gain.gain.linearRampToValueAtTime(0, now + 1.3)

  osc1.connect(gain)
  osc2.connect(gain)
  gain.connect(ctx.destination)

  osc1.start(now)
  osc2.start(now)
  osc1.stop(now + 1.3)
  osc2.stop(now + 1.3)
}
