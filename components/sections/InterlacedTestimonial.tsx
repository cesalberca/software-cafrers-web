import { TestimonialCard } from './TestimonialCard'

interface InterlacedTestimonialProps {
  quote: string
  author: string
}

export function InterlacedTestimonial({ quote, author }: InterlacedTestimonialProps) {
  return (
    <div className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <TestimonialCard quote={quote} author={author} className="border-gold/20 bg-navy-light/30 text-center" />
      </div>
    </div>
  )
}
