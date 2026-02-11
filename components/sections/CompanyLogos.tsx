const COMPANIES = [
  { name: 'Googol', tagline: "Don't be evil (a veces)" },
  { name: 'Macrosoft', tagline: 'Where do you want to crash today?' },
  { name: 'Amazón', tagline: 'Tu paquete llega antes que tu deploy' },
  { name: 'Facebuuk', tagline: 'Connecting bugs' },
  { name: 'Netflax', tagline: 'Streaming de errores 24/7' },
  { name: 'Spootify', tagline: 'Escucha el sonido de tu build fallando' },
  { name: 'Twittor', tagline: '280 caracteres de código horrible' },
  { name: 'SlackOff', tagline: 'Donde la productividad va a morir' },
  { name: 'GitRub', tagline: 'Push, pray, repeat' },
  { name: 'StackOverflood', tagline: 'Copia y reza' },
]

function CompanyLogo({ company }: { company: (typeof COMPANIES)[number] }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 opacity-40 hover:opacity-80 transition-opacity duration-300 group">
      <div className="text-white/70 font-black text-base sm:text-lg tracking-tight group-hover:text-gold transition-colors">
        {company.name}
      </div>
      <div className="text-white/30 text-[10px] mt-0.5 group-hover:text-white/50 transition-colors">
        {company.tagline}
      </div>
    </div>
  )
}

export function CompanyLogos() {
  return (
    <section className="py-16 px-4 border-y border-gold/5">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-white/30 text-xs uppercase tracking-widest mb-8">
          Empresas que nos han pedido explícitamente que no las mencionemos
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {COMPANIES.map((company) => (
            <CompanyLogo key={company.name} company={company} />
          ))}
        </div>

        <p className="text-center text-white/15 text-xs mt-8">
          *Ninguna de estas empresas existe. Ninguna nos ha patrocinado. Todas nos han amenazado con demandarnos.
        </p>
      </div>
    </section>
  )
}
