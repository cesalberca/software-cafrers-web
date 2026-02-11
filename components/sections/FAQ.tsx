'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Link } from '@/components/ui/link'
import { ReactNode } from 'react'

const FAQ_ITEMS: { question: string; answer: ReactNode }[] = [
  {
    question: '¿Es este libro para mí?',
    answer:
      'Si escribes código, sí. Si no escribes código, también: es un regalo perfecto para humillar a alguien que sí lo hace. Si eres una cabra, definitivamente no. Ya has sufrido bastante.',
  },
  {
    question: '¿Aprenderé algo útil?',
    answer:
      'Define "útil". Si por útil te refieres a técnicas para escribir código que garantice tu puesto de trabajo porque nadie más puede tocarlo, entonces sí. Si te refieres a buenas prácticas... te has equivocado de libro.',
  },
  {
    question: '¿Puedo devolverlo?',
    answer:
      'Técnicamente sí, pero ¿emocionalmente? El daño ya está hecho. Es como intentar devolver un tatuaje. El arrepentimiento es irreversible.',
  },
  {
    question: '¿Hay descuento por volumen?',
    answer:
      'Ofrecemos el plan COMPRA 3, RECIBE 2 Y PAGA 4. Es nuestra oferta más popular porque nadie la entiende y eso genera confianza.',
  },
  {
    question: '¿Viene en formato digital?',
    answer:
      'El libro está disponible en formato físico. Sí, papel. Ese material que usabas antes de tener una pantalla pegada a la cara 14 horas al día. Consulta la web de Savvily para más detalles.',
  },
  {
    question: 'Mi código ya es malo, ¿me servirá?',
    answer:
      'Siempre se puede empeorar. Esa es la belleza de la programación: el fondo no existe. Este libro te enseñará que lo que creías que era el fondo... era solo el principio.',
  },
  {
    question: '¿Es un buen regalo?',
    answer:
      'Es el regalo perfecto para: tu compañero de trabajo que rompe producción cada viernes, tu amigo "fullstack" que solo sabe hacer console.log, o tu jefe que insiste en que "refactorizar es perder el tiempo".',
  },
  {
    question: '¿Quién hizo las ilustraciones?',
    answer: (
      <>
        Las increíbles (y muy pacientes) ilustraciones son obra de Marta Aldarias Villacañas. Puedes ver más de su trabajo en{' '}
        <Link href="https://aldariasart.es" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          aldariasart.es
        </Link>{' '}
        o en Instagram como{' '}
        <Link href="https://instagram.com/aldarias_art" className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors">
          @aldarias_art
        </Link>
        . Ella no tiene la culpa de nada.
      </>
    ),
  },
  {
    question: '¿Por qué 42a edición?',
    answer: (
      <>
        Porque 42 es{' '}
        <Link
          href="https://es.wikipedia.org/wiki/El_sentido_de_la_vida,_el_universo_y_todo_lo_dem%C3%A1s"
          className="text-gold hover:text-gold-light underline underline-offset-4 transition-colors"
        >
          la respuesta a la vida, el universo y todo lo demás
        </Link>
        . Y también es el número de países donde las estructuras de código de este libro son ilegales. ¿Coincidencia? Sí, totalmente.
      </>
    ),
  },
  {
    question: '¿Hay secuelas?',
    answer: 'Sí, muchas.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 bg-navy-dark/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gold mb-4 text-center">Preguntas Frecuentes</h2>
        <p className="text-center text-white/60 mb-12 text-lg">Respuestas que no pediste a preguntas que no hiciste</p>

        <Accordion type="single" collapsible className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-gold/10 rounded-xl px-6 bg-navy-light/20 data-[state=open]:border-gold/30 transition-colors"
            >
              <AccordionTrigger className="text-white hover:text-gold text-left font-medium py-4 [&[data-state=open]]:text-gold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/70 pb-4 leading-relaxed">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
