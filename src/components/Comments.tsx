import { Carousel } from '@material-tailwind/react'

const COMMENTS = [
  {
    id: 1,
    name: 'Belén Bauzá',
    comment:
      'Mis clientes valoran mucho de mi agencia la creatividad y nuestras ganas de acercarles cosas nuevas, simples y que se puedan aplicar no solamente en los espacios de trabajo o corporativos sino que sea experiencias que ellos puedan llevar a otros espacios: la familia, los amigos. Y me parece que desconectarnos cumple con eso.',
    company: 'Cora Blue',
  },
  {
    id: 2,
    name: 'Carolina Arón',
    comment:
      'Como experiencia personal y grupal, te puedo decir que me encantó y me ayudó a abrir conversaciones super enriquecedoras con personas cercanas y no tanto. Lo súper recomiendo como regalo empresarial.',
    company: 'Google',
  },
  {
    id: 3,
    name: 'María Esquivel',
    comment:
      'Me interesó que se trata de un juego muy sencillo, no tiene instrucciones complejas, permite que se unan personas de diferentes edades, y me gusta que genere conversaciones. Es decir el juego no se trata del juego mismo sino que se trata de las personas que lo juegan. Y me parece que ahí está el gran valor de la propuesta.',
    company: 'SIG',
  },
]

export default function Comments() {
  return (
    <section
      className="
    bg-[#584776] px-4 py-10 lg:py-14
    "
    >
      <div
        className="hidden lg:flex flex-row gap-2 justify-evenly items-stretch
    "
      >
        {COMMENTS.map((comment) => {
          return (
            <div
              key={comment.id}
              className="flex flex-col px-6 pt-8 py-4 rounded-lg w-1/4 justify-between gap-8
                bg-opacity-[20%] bg-gray-50 text-white
            "
              style={{
                fontFamily: 'PP Neue Montreal Book',
                fontSize: '14px',
              }}
            >
              <p className="text-justify">{comment.comment}</p>
              <div
                className="flex flex-col"
                style={{
                  fontFamily: 'PP Neue Montreal Bold',
                  fontSize: '16px',
                }}
              >
                <h1>{comment.name},</h1>
                <p>{comment.company}</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="lg:hidden">
        <Carousel className="rounded-xl items-stretch justify-stretch h-full select-none">
          {COMMENTS.map((comment) => {
            return (
              <div
                key={comment.id}
                className="flex flex-col px-6 pt-8 py-4 rounded-lg w-1/4 justify-between gap-8
                bg-opacity-[20%] bg-gray-50 text-white w-full h-full max-w-[500px] mx-auto 
            "
                style={{
                  fontFamily: 'PP Neue Montreal Book',
                  fontSize: '14px',
                }}
              >
                <p className="text-justify">{comment.comment}</p>
                <div
                  className="flex flex-col"
                  style={{
                    fontFamily: 'PP Neue Montreal Bold',
                    fontSize: '16px',
                  }}
                >
                  <h1>{comment.name},</h1>
                  <p>{comment.company}</p>
                </div>
              </div>
            )
          })}
        </Carousel>
      </div>
    </section>
  )
}
