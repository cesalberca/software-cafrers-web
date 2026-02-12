const COMPANIES = [
  { name: 'Googol' },
  { name: 'Macrosoft' },
  { name: 'Amazón' },
  { name: 'Facebuuk' },
  { name: 'Netflax' },
  { name: 'Spootify' },
  { name: 'Twittor' },
  { name: 'SlackOff' },
  { name: 'GitRub' },
  { name: 'StackOverflood' },
]

function CompanyLogo({ company }: { company: (typeof COMPANIES)[number] }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 opacity-40 hover:opacity-80 transition-opacity duration-300 group">
      <div className="text-white/70 font-black text-base sm:text-lg tracking-tight group-hover:text-gold transition-colors">
        {company.name}
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

        <div className="mt-10 text-center border border-dashed border-gold/20 rounded-xl p-6 max-w-xl mx-auto bg-navy-light/10">
          <p className="text-gold font-bold text-lg mb-2">
            ¿Quieres tu logo aquí?
          </p>
          <p className="text-white/60 text-sm mb-4">
            Si tu empresa quiere aparecer en esta prestigiosa lista (real o ficticia), escríbenos. De momento es gratis.
          </p>
          <a
            href="mailto:software.cafrers@cesalberca.com?subject=Logo%20en%20Software%20Cafrers"
            className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-bold text-sm underline underline-offset-4 transition-colors"
          >
            Contactar
          </a>
          <p className="text-white/30 text-xs mt-3">
            No garantizamos que escribamos bien el nombre de tu empresa.
          </p>
        </div>

        <p className="text-center text-white/15 text-xs mt-8">
          *Ninguna de estas empresas existe. Ninguna nos ha patrocinado. Todas nos han amenazado con demandarnos.
        </p>
      </div>
    </section>
  )
}
