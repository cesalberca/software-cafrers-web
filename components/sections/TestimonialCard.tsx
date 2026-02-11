interface TestimonialCardProps {
  quote: string
  author: string
  className?: string
}

export function TestimonialCard({ quote, author, className = '' }: TestimonialCardProps) {
  return (
    <div className={`border border-gold/10 rounded-xl p-6 bg-navy-light/20 ${className}`}>
      <p className="text-white/80 italic text-lg mb-3 leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <p className="text-gold text-sm font-bold">&mdash; {author}</p>
    </div>
  )
}
