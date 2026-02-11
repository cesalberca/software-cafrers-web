const COMPARISON_ROWS = [
  {
    feature: 'Puede usarse como pisapapeles',
    rock: true,
    book: true,
  },
  {
    feature: 'Mejora tu código',
    rock: 'Indiferente',
    book: 'Lo empeora activamente',
  },
  {
    feature: 'Precio razonable',
    rock: 'Gratis (recógela del suelo)',
    book: 'Demasiado barato para el daño que hace',
  },
  {
    feature: 'Resistente al agua',
    rock: true,
    book: 'Solo si no lo abres',
  },
  {
    feature: 'Hace vomitar a una cabra',
    rock: false,
    book: true,
  },
  {
    feature: 'Útil en una pelea',
    rock: true,
    book: 'Solo si lo lanzas',
  },
  {
    feature: 'Te hace indispensable en el trabajo',
    rock: false,
    book: true,
  },
  {
    feature: 'Contiene JavaScript',
    rock: 'Afortunadamente no',
    book: 'Desgraciadamente sí',
  },
  {
    feature: 'Puedes regalarlo a alguien que odias',
    rock: 'Sospechoso',
    book: 'Socialmente aceptable',
  },
  {
    feature: 'Ilustraciones de cabras',
    rock: false,
    book: true,
  },
]

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === 'boolean') {
    return value ? (
      <span className="text-green-400 font-bold text-lg">SÍ</span>
    ) : (
      <span className="text-red-400 font-bold text-lg">NO</span>
    )
  }
  return <span className="text-white/80 text-sm">{value}</span>
}

export function Comparison() {
  return (
    <section id="comparacion" className="py-20 px-4 bg-navy-dark/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gold mb-4 text-center">Comparativa Objetiva</h2>
        <p className="text-center text-white/60 mb-12 text-lg">Software Cafrers vs. Una Piedra</p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gold/30">
                <th className="text-left p-4 text-white/60 font-normal text-sm">Característica</th>
                <th className="text-center p-4 text-white/80 font-bold">
                  <span className="text-2xl">🪨</span>
                  <br />
                  Una Piedra
                </th>
                <th className="text-center p-4 text-gold font-bold">
                  <span className="text-2xl">📖</span>
                  <br />
                  Software Cafrers
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-gold/10 ${
                    i % 2 === 0 ? 'bg-navy-light/10' : ''
                  } hover:bg-navy-light/20 transition-colors`}
                >
                  <td className="p-4 text-white/90 text-sm font-medium">{row.feature}</td>
                  <td className="p-4 text-center">
                    <CellValue value={row.rock} />
                  </td>
                  <td className="p-4 text-center">
                    <CellValue value={row.book} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <p className="text-white/50 text-sm italic">
            Conclusión: ambos son igual de útiles para programar, pero solo uno tiene ilustraciones de cabras.
          </p>
        </div>
      </div>
    </section>
  )
}
