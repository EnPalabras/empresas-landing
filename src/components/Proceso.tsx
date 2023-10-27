import nota from '../assets/logos/proceso/notavioleta.png'
import carta from '../assets/logos/proceso/cartanegro.png'
import manomoneda from '../assets/logos/proceso/manomoneda.png'
import camion from '../assets/logos/proceso/camioneta.png'
import brand from '../assets/logos/proceso/brand.png'
import lapiz from '../assets/logos/proceso/lapiz.png'
import gente from '../assets/logos/proceso/gente.png'
import fabrica from '../assets/logos/proceso/fabrica.png'
import acuerdo from '../assets/logos/proceso/acuerdo.png'

export default function Proceso() {
  return (
    <section className="max-w-6xl mx-auto my-10 px-2 md:px-4" id="proceso">
      <div className="flex flex-col lg:flex-row justify-between items-center max-w-6xl">
        <h4
          className="text-5xl text-gray-800 lg:text-7xl mb-8 text-center lg:text-left"
          style={{
            fontFamily: 'PP Neue Montreal Medium',
            lineHeight: '1.2',
          }}
        >
          Conocé nuestro{' '}
          <span
            className="text-[#584776]"
            style={{
              fontFamily: 'PP Neue Montreal Bold',
            }}
          >
            {' '}
            <br className="hidden lg:inline" /> proceso
          </span>{' '}
        </h4>
        <div className="flex flex-row justify-center gap-6 ">
          <div
            className=" bg-white bg-opacity-70 rounded-xl p-4 py-2 
                      flex flex-col justify-around gap-4
                      max-w-[200px]
                    "
          >
            <p
              className="text-gray-800 px- text-center"
              style={{
                fontFamily: 'PP Neue Montreal Medium',
                fontSize: '16px',
                fontStyle: 'italic',
              }}
            >
              En Palabras
            </p>
          </div>
          <div
            className="bg-[#c2bad8] bg-opacity-70 rounded-xl p-4 py-2 
                      flex flex-col justify-around gap-4
                      max-w-[200px]
                    "
          >
            <p
              className="text-[#584776] px- text-center"
              style={{
                fontFamily: 'PP Neue Montreal Medium',
                fontSize: '16px',
                fontStyle: 'italic',
              }}
            >
              Tu empresa
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-between items-center max-w-6xl mx-auto text-justify">
        <h5 className="text-[#584776] my-4 text-2xl italic lg:text-4xl md:self-start">
          Cartas o packaging <span>no personalizado</span>:
        </h5>
        {/* <div className="max-w-6xl mx-auto flex flex-row flex-wrap w-full gap-2 justify-center items-around"> */}
        <div
          className="max-w-6xl mx-auto 
        flex flex-row flex-wrap 
        w-full gap-y-2 sm:gap-y-4 md:gap-y-8 lg:gap-x-2
        gap-x-2 sm:gap-x-4 md:gap-x-8 lg:gap-x-2
        justify-center md:justify-evenly xl:justify-between items-around"
        >
          <div
            className="bg-[#c2bad8] bg-opacity-70 rounded-xl p-4 py-6 
                      flex flex-col justify-between gap-4
                      max-w-[200px]
                    "
          >
            <div className="flex flex-row justify-between items-start">
              <p className="pt-1/2 text-lg text-[#584776] font-bold">1</p>
              <img src={nota} alt="nota" className="w-14 h-12 mx-auto" />
              <p className="relative top-0 left-0 text-lg text-[#584776]"></p>
            </div>

            <div className="flex flex-col justify-around h-full">
              <p
                className="text-[#584776] px- text-center justify-center items-center"
                style={{
                  fontFamily: 'PP Neue Montreal Medium',
                  fontSize: '14px',
                }}
              >
                Completá <b>este formulario</b> para que podamos conocer tu
                necesidad.
              </p>
            </div>
          </div>

          <div
            className="bg-white bg-opacity-70 rounded-xl p-4 py-6 
                      flex flex-col justify-between gap-4
                      max-w-[200px]
                    "
          >
            <div className="flex flex-row justify-between items-start">
              <p className="pt-1/2 text-lg text-gray-800 font-bold">2</p>
              <img src={carta} alt="carta" className="w-14 h-12 mx-auto" />
              <p className="relative top-0 left-0 text-lg text-[#584776]"></p>
            </div>
            <div className="flex flex-col justify-around h-full">
              <p
                className="text-gray-800 px- text-center justify-center items-center"
                style={{
                  fontFamily: 'PP Neue Montreal Medium',
                  fontSize: '14px',
                }}
              >
                <b>Enviamos la propuesta</b> y presupuesto personalizado a tu
                mail.
              </p>
            </div>
          </div>

          <div
            className="bg-[#c2bad8] bg-opacity-70 rounded-xl p-4 py-6 
                      flex flex-col justify-between gap-4
                      max-w-[200px]
                    "
          >
            <div className="flex flex-row justify-between items-start">
              <p className="pt-1/2 text-lg text-[#584776] font-bold">3</p>
              <img src={manomoneda} alt="nota" className="w-14 h-12 mx-auto" />
              <p className="relative top-0 left-0 text-lg text-[#584776]"></p>
            </div>
            <div className="flex flex-col justify-around h-full">
              <p
                className="text-[#584776] px- text-center justify-center items-center"
                style={{
                  fontFamily: 'PP Neue Montreal Medium',
                  fontSize: '14px',
                }}
              >
                Si estás de acuerdo con la propuesta y no hay dudas, procedés a{' '}
                <b>realizar el pago del 50%</b> del monto total y comenzamos con
                el camino creativo
              </p>
            </div>
          </div>
          <div
            className="bg-white bg-opacity-70 rounded-xl p-4 py-6 
                      flex flex-col justify-between gap-4
                      max-w-[200px]
                    "
          >
            <div className="flex flex-row justify-between items-start ">
              <p className="pt-1/2 text-lg text-gray-800 font-bold">4</p>
              <img src={camion} alt="nota" className="w-18 h-12 mx-auto" />
              <p className="relative top-0 left-0 text-lg text-[#584776]"></p>
            </div>
            <div className="flex flex-col justify-around h-full">
              <p
                className="text-gray-800 px- text-center justify-center items-center"
                style={{
                  fontFamily: 'PP Neue Montreal Medium',
                  fontSize: '14px',
                }}
              >
                <b>Enviamos los juegos</b> apenas realices el{' '}
                <b>pago del 50%</b> del monto total
              </p>
            </div>
          </div>
          <div
            className="bg-[#c2bad8] bg-opacity-70 rounded-xl p-4 py-6 
                      flex flex-col justify-between gap-4
                      max-w-[200px]
                    "
          >
            <div className="flex flex-row justify-between items-start">
              <p className="pt-1/2 flex-1 text-lg text-[#584776] font-bold">
                5
              </p>

              <img
                src={acuerdo}
                alt="nota"
                className="w-18 h-14 mx-auto flex-1"
              />

              <p className="relative flex-1 top-0 left-0 text-lg text-[#584776]"></p>
            </div>

            <div className="flex flex-col justify-around h-full">
              <p
                className="text-[#584776] px- text-center justify-center items-center"
                style={{
                  fontFamily: 'PP Neue Montreal Medium',
                  fontSize: '14px',
                }}
              >
                Una vez recibido el pedido deberás completar el pago del{' '}
                <b>50% restante.</b>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 justify-between items-center max-w-6xl mx-auto text-justify">
        <div className="flex flex-row justify-around gap-6 md:self-start"></div>
        <h5 className="text-[#584776] my-4 text-2xl italic lg:text-4xl md:self-start">
          Cartas o packaging <span>personalizado</span>:
        </h5>
        {/* <div className="max-w-6xl mx-auto flex flex-row flex-wrap w-full gap-2 justify-center items-around"> */}
        <div
          className="max-w-6xl mx-auto 
              flex flex-row flex-wrap 
              w-full 
              justify-center md:justify-evenly 
              xl:justify-evenly items-around
              gap-y-2 sm:gap-y-4 md:gap-y-8 
              gap-x-2 sm:gap-x-4 md:gap-x-8 
        "
        >
          <div
            className="bg-[#c2bad8] bg-opacity-70 rounded-xl p-4 py-6 
                      flex flex-col justify-between gap-4
                      max-w-[200px]
                    "
          >
            <div className="flex flex-row justify-between items-start">
              <img src={nota} alt="nota" className="w-14 h-12 mx-auto" />
            </div>

            <div className="flex flex-col justify-around h-full">
              <p
                className="text-[#584776] px-2 text-center justify-center items-center"
                style={{
                  fontFamily: 'PP Neue Montreal Medium',
                  fontSize: '14px',
                }}
              >
                Pasos 1, 2 y 3 mencionados anteriormente
              </p>
            </div>
          </div>
          <div
            className="bg-[#c2bad8] bg-opacity-70 rounded-xl p-4 py-6 
                      flex flex-col justify-between gap-4
                      max-w-[200px]
                    "
          >
            <div className="flex flex-row justify-between items-start">
              <p className="flex-1 pt-1/2 text-lg text-[#584776] font-bold">
                4
              </p>
              <img
                src={brand}
                alt="nota"
                className="flex-1 w-14 h-12 mx-auto"
              />
              <p className="flex-1 relative top-0 left-0 text-lg text-[#584776]"></p>
            </div>
            <div className="flex flex-col justify-around h-full">
              <p
                className="text-[#584776] px- text-center justify-center items-center"
                style={{
                  fontFamily: 'PP Neue Montreal Medium',
                  fontSize: '14px',
                }}
              >
                Compartís logo, color de identidad corporativa y preguntas
                relacionadas a tu campaña.
              </p>
            </div>
          </div>
          <div
            className="bg-white bg-opacity-70 rounded-xl p-4 py-6 
                      flex flex-col justify-between gap-4
                      max-w-[200px]
                    "
          >
            <div className="flex flex-row justify-between items-start">
              <p className="flex-1 pt-1/2 text-lg text-gray-800 font-bold">5</p>
              <img
                src={lapiz}
                alt="carta"
                className="flex-1 w-16 h-14 mx-auto"
              />
              <p className="flex-1 relative top-0 left-0 text-lg text-[#584776]"></p>
            </div>
            <div className="flex flex-col justify-around h-full">
              <p
                className="text-gray-800 px- text-center justify-center items-center"
                style={{
                  fontFamily: 'PP Neue Montreal Medium',
                  fontSize: '14px',
                }}
              >
                Nuestro<b> equipo diseña y adapta las preguntas</b> a un tono
                amigable y profundo.
              </p>
            </div>
          </div>
          <div
            className="bg-[#c2bad8] bg-opacity-70 rounded-xl p-4 py-6 
                      flex flex-col justify-between gap-4
                      max-w-[200px]
                    "
          >
            <div className="flex flex-row justify-between items-start">
              <p className="flex-1 pt-1/2 text-lg text-[#584776] font-bold">
                6
              </p>
              <img
                src={gente}
                alt="nota"
                className="flex-1 w-16 h-14 mx-auto"
              />
              <p className="flex-1 relative top-0 left-0 text-lg text-[#584776]"></p>
            </div>
            <div className="flex flex-col justify-around h-full">
              <p
                className="text-[#584776] px- text-center justify-center items-center"
                style={{
                  fontFamily: 'PP Neue Montreal Medium',
                  fontSize: '14px',
                }}
              >
                <b>Reunión de feedback</b> de ambos equipos para validar las
                preguntas y diseños de cartas
              </p>
            </div>
          </div>
          <div
            className="bg-white bg-opacity-70 rounded-xl p-4 py-6 
                      flex flex-col justify-between gap-4 
                      max-w-[200px] w-full
                    "
          >
            <div className="flex flex-row justify-between items-start">
              <p className="flex-1 pt-1/2 text-lg text-gray-800 font-bold">7</p>
              <img
                src={fabrica}
                alt="nota"
                className="w-18 h-16 mx-auto flex-1"
              />
              <p className="relative top-0 left-0 text-lg text-[#584776] flex-1"></p>
            </div>
            <div className="flex flex-col justify-around h-full">
              <p
                className="text-gray-800 px- text-center justify-center items-center"
                style={{
                  fontFamily: 'PP Neue Montreal Medium',
                  fontSize: '14px',
                }}
              >
                {' '}
                Una vez aprobado, <b>enviamos los diseños a la imprenta</b>. La
                producción <b>demora 12 días hábiles</b>.
              </p>
            </div>
          </div>
          <div
            className="bg-white bg-opacity-70 rounded-xl p-4 py-6 
                      flex flex-col justify-between gap-4
                      max-w-[200px]
                    "
          >
            <div className="flex flex-row justify-between items-start">
              <p className="flex-1 pt-1/2 text-lg text-gray-800 font-bold">8</p>
              <img
                src={camion}
                alt="nota"
                className="flex-1 w-18 h-12 mx-auto"
              />
              <p className="flex-1 relative top-0 left-0 text-lg text-[#584776]"></p>
            </div>

            <div className="flex flex-col justify-around h-full">
              <p
                className="text-gray-800 px- text-center justify-center items-center"
                style={{
                  fontFamily: 'PP Neue Montreal Medium',
                  fontSize: '14px',
                }}
              >
                Se envía el pedido al domicilio compartido (la entrega depende
                de la distancia).
              </p>
            </div>
          </div>
          <div
            className="bg-[#c2bad8] bg-opacity-70 rounded-xl p-4 py-6 
                      flex flex-col justify-between gap-4 
                      max-w-[200px] w-full
                    "
          >
            <div className="flex flex-row justify-between items-start">
              <p className="flex-1 pt-1/2 text-lg text-[#584776] font-bold">
                9
              </p>
              <img
                src={acuerdo}
                alt="nota"
                className="w-18 h-14 mx-auto flex-1"
              />
              <p className="relative top-0 left-0 text-lg text-[#584776] flex-1"></p>
            </div>
            <div className="flex flex-col justify-around h-full">
              <p
                className="text-[#584776] px- text-center justify-center items-center"
                style={{
                  fontFamily: 'PP Neue Montreal Medium',
                  fontSize: '14px',
                }}
              >
                {' '}
                Una vez recibido el pedido deberás completar el pago del{' '}
                <b>50% restante</b>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
