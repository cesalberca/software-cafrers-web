import { Banner } from '@/components/sections/Banner'
import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { AboutBook } from '@/components/sections/AboutBook'
import { Prologo } from '@/components/sections/Prologo'
import { AboutAuthor } from '@/components/sections/AboutAuthor'
import { Epilogo } from '@/components/sections/Epilogo'
import { Editorial } from '@/components/sections/Editorial'
import { FollowUs } from '@/components/sections/FollowUs'
import { WhatsIncluded } from '@/components/sections/WhatsIncluded'
import { Testimonials } from '@/components/sections/Testimonials'
import { Comparison } from '@/components/sections/Comparison'
import { CompanyLogos } from '@/components/sections/CompanyLogos'
import { FreeSample } from '@/components/sections/FreeSample'
import { Guarantees } from '@/components/sections/Guarantees'
import { Bonus } from '@/components/sections/Bonus'
import { FAQ } from '@/components/sections/FAQ'
import { BuySection } from '@/components/sections/BuySection'
import { GoatChatbot } from '@/components/sections/GoatChatbot'
import { InterlacedTestimonial } from '@/components/sections/InterlacedTestimonial'
import { Footer } from '@/components/sections/Footer'
import { PeskyModal } from '@/components/sections/PeskyModal'
import { ConsoleArt } from '@/components/ConsoleArt'

export default function Home() {
  return (
    <main className="min-h-screen bg-navy overflow-x-hidden">
      <Header />

      <Hero />

      <InterlacedTestimonial quote="Más que un libro técnico, técnicamente es un libro." author="Neu York Times" />

      <AboutBook />

      <InterlacedTestimonial quote="Lo tuvimos que leer con guantes." author="The Gaurdian" />

      <AboutAuthor />

      <Prologo />

      <Banner />

      <Epilogo />

      <Editorial />

      <FollowUs />

      <WhatsIncluded />

      <InterlacedTestimonial quote='Una obra que redefine el concepto de "publicable".' author="The Washingon Post" />

      <CompanyLogos />

      <InterlacedTestimonial quote="Ideal para calzar monitores." author="Revista Forves" />

      <Testimonials />

      <Comparison />

      <FreeSample />

      <Guarantees />

      <InterlacedTestimonial quote="Inapetente incluso para rumiantes." author="National Geographyc" />

      <Bonus />

      <FAQ />

      <BuySection />

      <Footer />

      <GoatChatbot />
      <PeskyModal />
      <ConsoleArt />
    </main>
  )
}
