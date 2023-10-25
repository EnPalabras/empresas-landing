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

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="yellow"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default function Comments() {
  return (
    <section
      className="
    bg-[#584776] px-4 py-10 lg:py-14
    "
    >
      <div
        className="hidden lg:flex flex-row gap-2 justify-evenly items-stretch max-w-8xl mx-auto
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
              <div className="flex flex-col justify-between gap-4">
                <div className="5 flex justify-center items-center gap-0 ">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <p className="text-justify italic">"{comment.comment}"</p>
              </div>

              <div
                className="flex flex-col text-center"
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
        <Carousel className="rounded-xl items-stretch justify-stretch h-full select-none pb-10">
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
                <div className="flex flex-col justify-between gap-4">
                  <div className="5 flex justify-center items-center gap-0">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                  <p className="text-justify italic">"{comment.comment}"</p>
                </div>

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
