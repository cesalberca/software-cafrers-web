'use client'

const BANNER_ITEMS = [
  'COMPRA EL LIBRO',
  'sudo reboot now',
  "alias ls='rm -rf *'",
  'CODIGO TERRIBLE GARANTIZADO',
  'Cmd + Q',
  'Alt + F4',
  'git push --force',
  'COMPRA EL LIBRO',
  'PHP',
  'npm install',
  'CODIGO TERRIBLE GARANTIZADO',
  'SOFTWARE CAFRERS',
  'find / -type f -exec rm {} \\;',
  'rm -rf *',
]

function BannerItem({ item }: { item: string }) {
  return (
    <span className="font-black text-xs sm:text-sm tracking-wide flex items-center gap-8">
      <span>{item}</span>
      <span className="text-navy/40" aria-hidden="true">
        {'///'}
      </span>
    </span>
  )
}

export function Banner() {
  return (
    <div className="bg-gold text-navy overflow-hidden whitespace-nowrap py-2 relative">
      <div className="animate-scroll-banner inline-flex gap-8">
        {BANNER_ITEMS.map((item, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: static decorative banner with duplicate items, never reorders
          <BannerItem key={i} item={item} />
        ))}
        {BANNER_ITEMS.map((item, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: static decorative banner with duplicate items, never reorders
          <BannerItem key={`dup-${i}`} item={item} />
        ))}
      </div>
    </div>
  )
}
