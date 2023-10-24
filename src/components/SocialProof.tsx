import socialDesktop from '../assets/images/juegos/page/desktop/socialproof.png'
import socialMobile from '../assets/images/juegos/page/mobile/socialproof.jpg'

export default function SocialProof() {
  return (
    <section className="max-w-8xl my-10 mx-auto lg:px-4">
      <div className="hidden my-10 lg:flex flex-col">
        <h4
          className="text-3xl text-gray-800 lg:text-7xl mb-8"
          style={{
            fontFamily: 'PP Neue Montreal Medium',
            lineHeight: '1.2',
          }}
        >
          ¿Para qué tener{' '}
          <span
            className="text-[#584776]"
            style={{
              fontFamily: 'PP Neue Montreal Bold',
            }}
          >
            conversaciones
            <br /> profundas{' '}
          </span>
          en tu empresa?
        </h4>

        <div className="w-full flex flex-row items-start h-full">
          <img
            src={socialDesktop}
            alt="social proof"
            className="w-1/2 
            transform -translate-x-[10%]
            
          "
          />
          <div
            className="flex flex-col gap-16 
                text-lg text-justify text-gray-800 h-full my-auto
            "
            style={{
              fontFamily: 'PP Neue Montreal Medium',
            }}
          >
            <div className="flex flex-col gap-8">
              <p>
                Las experiencias de nuestros usuarios dan cuenta de un cambio en
                la dinámica laboral. Una necesidad de mejorar las relaciones en
                el equipo y la posiblidad de conocer nuevas facetas y puntos en
                común para conectar.
              </p>
              <p>
                Por eso desde <b>En Palabras</b>, nos comprometemos y elegimos
                crear dinámicas que faciliten conversaciones profundas y
                reflexivas así, quien elige jugar, guarda en su memoria una
                experiencia significativa sobre sus deseos que recordará en el
                tiempo.
              </p>
            </div>
            <p
              className="text-[#584776] font-bold"
              style={{
                fontFamily: 'PP Neue Montreal Bold',
                fontSize: '1.2rem',
              }}
            >
              Innová regalando una charla de En Palabras
            </p>

            <div
              className="flex flex-row justify-center 
            gap-6 items-stretch"
            >
              <div
                className="flex flex-col justify-between py-9 px-6 
              bg-[#584776] bg-opacity-[30%] bg-gray-50 
              rounded-xl text-center"
              >
                <p
                  className="mb-2 text-[#584776]"
                  style={{
                    fontFamily: 'PP Neue Montreal Bold',
                    fontSize: '3.5rem',
                  }}
                >
                  +100k
                </p>
                <p
                  className="text-left 
                  text-[#584776]"
                  style={{
                    fontFamily: 'PP Neue Montreal Medium',
                    fontSize: '1.2rem',
                  }}
                >
                  juegos vendidos
                </p>{' '}
              </div>
              <div
                className="flex flex-col justify-between py-9 px-6 
              bg-[#584776] bg-opacity-[30%] bg-gray-50 
              rounded-xl text-center"
              >
                <p
                  className="mb-2 text-[#584776]"
                  style={{
                    fontFamily: 'PP Neue Montreal Bold',
                    fontSize: '3.5rem',
                  }}
                >
                  +16
                </p>
                <p
                  className="text-left 
                  text-[#584776]"
                  style={{
                    fontFamily: 'PP Neue Montreal Medium',
                    fontSize: '1.2rem',
                  }}
                >
                  países
                </p>{' '}
              </div>
              <div
                className="flex flex-col justify-between pt-9 pb-2 px-6 
              bg-[#584776] bg-opacity-[30%] bg-gray-50 
              rounded-xl text-center"
              >
                <p
                  className="mb-2 text-[#584776]"
                  style={{
                    fontFamily: 'PP Neue Montreal Bold',
                    fontSize: '3.5rem',
                  }}
                >
                  +35
                </p>
                <p
                  className="text-left 
                  text-[#584776]"
                  style={{
                    fontFamily: 'PP Neue Montreal Medium',
                    fontSize: '1.2rem',
                  }}
                >
                  colaboraciones con <br />
                  empresas
                </p>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex mb-10 px-4 py-10 lg:hidden rounded-xl"
        style={{
          backgroundImage: `url(${socialMobile})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '80vh',
        }}
      >
        <div
          className="flex flex-col mx-auto my-auto py-10 px-4 rounded-lg 
        justify-center items-center bg-[#c2bad8] bg-opacity-90"
        >
          <h4
            className="text-2xl text-gray-800 mb-8 md:text-4xl text-center"
            style={{
              fontFamily: 'PP Neue Montreal Medium',
              lineHeight: '1.2',
            }}
          >
            ¿Para qué tener{' '}
            <span
              className="text-[#584776]"
              style={{
                fontFamily: 'PP Neue Montreal Bold',
              }}
            >
              conversaciones
              <br /> profundas{' '}
            </span>
            en tu empresa?
          </h4>
          <p className="text-justify text-black mb-2 leading-tight">
            Las experiencias de nuestros usuarios dan cuenta de un cambio en la
            dinámica laboral. Una necesidad de mejorar las relaciones en el
            equipo y la posiblidad de conocer nuevas facetas y puntos en común
            para conectar.
          </p>
          <br />
          <p className="text-justify text-black mb-2 leading-tight">
            Las experiencias de nuestros usuarios dan cuenta de un cambio en la
            dinámica laboral. Una necesidad de mejorar las relaciones en el
            equipo y la posiblidad de conocer nuevas facetas y puntos en común
            para conectar.
          </p>
          <p
            className="text-[#584776] text-center my-2 font-bold"
            style={{
              fontFamily: 'PP Neue Montreal Bold',
              fontSize: '20px',
            }}
          >
            Innová regalando una charla de En Palabras
          </p>
          <div
            className="flex flex-row justify-center 
            w-full gap-2 text-center"
          >
            <div
              className="flex flex-col py-2 px-2 w-full
              bg-[#584776] bg-opacity-[10%] bg-gray-50 
              rounded-xl text-center"
            >
              <p
                className="text-[#584776]"
                style={{
                  fontFamily: 'PP Neue Montreal Bold',
                  fontSize: '2rem',
                }}
              >
                +100k
              </p>
              <p
                className="my-auto
                  text-[#584776]"
                style={{
                  fontFamily: 'PP Neue Montreal Medium',
                  fontSize: '14px',
                }}
              >
                juegos vendidos
              </p>{' '}
            </div>
            <div
              className="flex flex-col justify-between py-2 px-2 w-full
              bg-[#584776] bg-opacity-[10%] bg-gray-50 
              rounded-xl text-center"
            >
              <p
                className="text-[#584776]"
                style={{
                  fontFamily: 'PP Neue Montreal Bold',
                  fontSize: '2rem',
                }}
              >
                +16
              </p>
              <p
                className=" my-auto
                  text-[#584776]"
                style={{
                  fontFamily: 'PP Neue Montreal Medium',
                  fontSize: '14px',
                }}
              >
                países
                <br />
              </p>{' '}
            </div>
            <div
              className="flex flex-col justify-between py-2 px-2 w-full
              bg-[#584776] bg-opacity-[10%] bg-gray-50 
              rounded-xl text-center"
            >
              <p
                className="text-[#584776]"
                style={{
                  fontFamily: 'PP Neue Montreal Bold',
                  fontSize: '2rem',
                }}
              >
                +35
              </p>
              <p
                className=" my-auto
                  text-[#584776]"
                style={{
                  fontFamily: 'PP Neue Montreal Medium',
                  fontSize: '14px',
                }}
              >
                colaboraciones con empreasas
              </p>{' '}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
