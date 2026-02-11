const AI_PROMPTS = [
  {
    title: 'El Generador de Variables',
    prompt: 'Renombra todas mis variables a una sola letra. Si se acaba el abecedario, usa emojis.',
    result: 'let 🐐 = getData(); let 🤮 = process(🐐);',
  },
  {
    title: 'El Comentarista',
    prompt: 'Añade comentarios que expliquen lo obvio e ignoren lo complejo.',
    result:
      '// Incrementa i en 1\ni++;\n// Magia negra, no tocar\nresult = arr.reduce((a,b)=>({...a,[b.k]:[...(a[b.k]||[]),b]}),{});',
  },
  {
    title: 'El Arquitecto Invisible',
    prompt: 'Crea una arquitectura de carpetas con al menos 47 niveles de anidación para un TODO app.',
    result: 'src/core/domain/entities/todo/base/abstract/v2/...',
  },
  {
    title: 'El Abstractor Compulsivo',
    prompt:
      'Crea una abstracción para sumar dos números que requiera al menos 3 interfaces, 2 factories y un observer.',
    result: 'class SumStrategyFactoryObserverBridgeProxy...',
  },
  {
    title: 'El Deployer Temerario',
    prompt: 'Escribe un script que haga deploy a producción los viernes a las 17:59.',
    result: 'crontab: 59 17 * * 5 ./deploy-yolo.sh',
  },
  {
    title: 'El Test Faker',
    prompt: 'Genera tests que siempre pasen, independientemente de lo que haga el código.',
    result: "it('works', () => expect(true).toBe(true))",
  },
]

export function Bonus() {
  return (
    <section id="bonus" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gold mb-4 text-center">
          BONUS: IA Skills para Código Terrible
        </h2>
        <p className="text-center text-white/60 mb-4 text-lg">
          6 prompts de IA para acelerar tu producción de desastres
        </p>
        <p className="text-center text-white/40 mb-12 text-sm">
          Porque la IA no tiene por qué generar solo código bueno
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {AI_PROMPTS.map((p) => (
            <div
              key={p.title}
              className="border border-gold/10 rounded-xl overflow-hidden bg-navy-light/20 hover:border-gold/30 transition-all group"
            >
              <div className="p-5">
                <h3 className="text-gold font-bold mb-2">{p.title}</h3>
                <p className="text-white/60 text-sm italic mb-4">&quot;{p.prompt}&quot;</p>
              </div>
              <div className="bg-navy-dark/80 p-4 border-t border-gold/10">
                <pre className="text-gold/70 text-xs font-mono overflow-x-auto whitespace-pre-wrap">{p.result}</pre>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/50 text-sm">
            Estos prompts se incluyen como material bonus conceptual con la compra del libro. Úselos bajo su propia
            responsabilidad. No nos hacemos responsables de despidos, demandas, o incidentes veterinarios.
          </p>
        </div>
      </div>
    </section>
  )
}
