const TESTIMONIALS = [
  {
    id: 1,
    personName: 'María Esquivel',
    company: 'SIG',
    opinion:
      'Me interesó que se trata de un juego muy sencillo, no tiene instrucciones complejas, permite que se unan personas de diferentes edades, y me gusta que genere conversaciones. Es decir el juego no se trata del juego mismo sino que se trata de las personas que lo juegan. Y me parece que ahí está el gran valor de la propuesta.',
  },
  {
    id: 2,
    personName: 'Carolina Arón',
    company: 'Google',
    opinion:
      'Como experiencia personal y grupal, te puedo decir que me encantó y me ayudó a abrir conversaciones super enriquecedoras con personas cercanas y no tanto. Lo súper recomiendo como regalo empresarial.',
  },
  {
    id: 3,
    personName: 'Belén Bauzá',
    company: 'Cora Blue',
    opinion:
      'Mis clientes valoran mucho de mi agencia la creatividad y nuestras ganas de acercarles cosas nuevas, simples y que se puedan aplicar no solamente en los espacios de trabajo o corporativos sino que sea experiencias que ellos puedan llevar a otros espacios: la familia, los amigos. Y me parece que desconectarnos cumple con eso.',
  },
]

export default function Testimonials() {
  return (
    <div className="w-full py-10 mx-auto bg-gray-900 text-white">
      <section className="text-center mx-auto ">
        <h2 className="mb-12 text-3xl font-bold text-white">
          Empresas que confiaron en En Palabras
        </h2>

        <div className="grid grid-cols-1 md:gap-x-6 md:grid-cols-3 lg:gap-x-10 px-10">
          {TESTIMONIALS.map((testimonial) => {
            return (
              <div className="mb-8 md:mb-0 px-4 lg:px-16" key={testimonial.id}>
                <h5 className="mb-2 text-lg font-bold">
                  {testimonial.personName}
                </h5>
                <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                  {testimonial.company}
                </h6>
                <p className="mb-4 text-center">{testimonial.opinion}</p>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
