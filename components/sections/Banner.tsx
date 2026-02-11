'use client'

const BANNER_ITEMS = [
  'COMPRA EL LIBRO',
  'HARIA VOMITAR A UNA CABRA',
  '42a EDICION',
  'CODIGO TERRIBLE GARANTIZADO',
  'SOFTWARE CAFRERS',
  'NO TOCAR ESTE CODIGO',
  'git push --force',
  'COMPRA EL LIBRO',
  'HARIA VOMITAR A UNA CABRA',
  '42a EDICION',
  'CODIGO TERRIBLE GARANTIZADO',
  'SOFTWARE CAFRERS',
  'NO TOCAR ESTE CODIGO',
  'git push --force',
]

export function Banner() {
  return (
    <div className="bg-gold text-navy overflow-hidden whitespace-nowrap py-2 relative">
      <div className="animate-scroll-banner inline-flex gap-8">
        {BANNER_ITEMS.map((item, i) => (
          <span key={i} className="font-black text-xs sm:text-sm tracking-wide flex items-center gap-8">
            <span>{item}</span>
            <span className="text-navy/40" aria-hidden="true">
              ///
            </span>
          </span>
        ))}
        {BANNER_ITEMS.map((item, i) => (
          <span key={`dup-${i}`} className="font-black text-xs sm:text-sm tracking-wide flex items-center gap-8">
            <span>{item}</span>
            <span className="text-navy/40" aria-hidden="true">
              ///
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
