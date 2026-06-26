import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  pixelBasedPreset,
  Section,
  Tailwind,
  type TailwindConfig,
  Text,
} from '@react-email/components'
import type { FC } from 'react'

interface BonusEmailProps {
  bonusUrl: string
}

const config: TailwindConfig = {
  presets: [pixelBasedPreset],
  theme: {
    extend: {
      colors: {
        navy: '#242a59',
        'navy-light': '#2e3566',
        gold: '#fcc146',
        'gold-dark': '#e5a82d',
        background: '#ffffff',
        foreground: '#0a0a0a',
        muted: '#737373',
        border: '#e5e5e5',
      },
    },
  },
}

export const BonusEmail: FC<BonusEmailProps> = ({ bonusUrl }) => {
  return (
    <Html lang="es">
      <Tailwind config={config}>
        <Head />
        <Preview>Tu botín cafre te espera. Beeeh.</Preview>
        <Body className="bg-background font-sans m-0 p-0">
          <Container className="mx-auto my-0 max-w-[560px] p-6">
            <Section className="rounded-2xl border border-border p-8">
              <Text className="m-0 text-xs font-medium uppercase tracking-wide text-gold-dark">Software Cafrers</Text>

              <Heading className="mb-2 mt-3 text-[28px] font-black leading-tight text-foreground">
                Bienvenido al rebaño 🐐
              </Heading>

              <Text className="mt-0 text-base leading-relaxed text-foreground">
                Has escaneado el QR del libro. Eso te convierte oficialmente en cómplice. No hay vuelta atrás: el daño
                ya está hecho.
              </Text>

              <Text className="text-base leading-relaxed text-foreground">
                Aquí tienes el botín que te prometimos. Úsalo con la irresponsabilidad que mereces.
              </Text>

              <Section className="my-8 text-center">
                <Button href={bonusUrl} className="rounded-xl bg-gold px-8 py-4 text-base font-black text-navy">
                  Reclamar mi bonus cafre
                </Button>
              </Section>

              <Text className="text-sm leading-relaxed text-muted">
                A partir de ahora no sabemos muy bien cómo haremos uso de tu correo, pero mientras tanto te puedes
                suscribir la{' '}
                <Link href="https://cesalberca.com/newsletter?utm_source=softwarecafrers.com&utm_medium=email&utm_campaign=bonus">
                  Newsletter de César
                </Link>
                , el autor del libro. Habla de temas de IA y Arquitectura. Si has comprado este libro dudamos de que los
                puedas llegar a entender, pero bueno.
              </Text>
            </Section>

            <Text className="mt-6 text-center text-xs text-muted">
              Te escribimos porque pediste el bonus desde el libro Software Cafrers.{' '}
              <Link href="https://www.softwarecafrers.com" className="text-muted underline">
                softwarecafrers.com
              </Link>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default BonusEmail
