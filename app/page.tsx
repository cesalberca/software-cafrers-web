import { Banner } from '@/components/sections/Banner'
import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { AboutBook } from '@/components/sections/AboutBook'
import { Prologo } from '@/components/sections/Prologo'
import { AboutAuthor } from '@/components/sections/AboutAuthor'
import { Epilogo } from '@/components/sections/Epilogo'
import { Editorial } from '@/components/sections/Editorial'
import { WhatsIncluded } from '@/components/sections/WhatsIncluded'
import { VideoTestimonials } from '@/components/sections/VideoTestimonials'
import { Testimonials } from '@/components/sections/Testimonials'
import { Comparison } from '@/components/sections/Comparison'
import { CompanyLogos } from '@/components/sections/CompanyLogos'
import { FreeSample } from '@/components/sections/FreeSample'
import { Guarantees } from '@/components/sections/Guarantees'
import { Bonus } from '@/components/sections/Bonus'
import { FAQ } from '@/components/sections/FAQ'
import { GoatChatbot } from '@/components/sections/GoatChatbot'
import { InterlacedTestimonial } from '@/components/sections/InterlacedTestimonial'
import { Footer } from '@/components/sections/Footer'
import { PeskyModal } from '@/components/sections/PeskyModal'

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

      <WhatsIncluded />

      <InterlacedTestimonial quote='Una obra que redefine el concepto de "publicable".' author="The Washingon Post" />

      <CompanyLogos />

      <InterlacedTestimonial quote="Ideal para calzar monitores." author="Revista Forves" />

      <VideoTestimonials />

      <Testimonials />

      <Comparison />

      <InterlacedTestimonial quote="Inapetente incluso para rumiantes." author="National Geographyc" />

      <FreeSample />

      <Guarantees />

      <Bonus />

      <InterlacedTestimonial
        quote="Mi terapeuta dice que no debería leerlo. Mi terapeuta no sabe JavaScript."
        author="Paciente 0 del burnout"
      />

      <FAQ />

      <Footer />

      <GoatChatbot />
      <PeskyModal />
    </main>
  )
}
