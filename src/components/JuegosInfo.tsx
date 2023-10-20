import { useState } from 'react'
import './JuegosInfo.css'
import descImage from '../assets/backgrounds/desconectados.jpg'
import destImage from '../assets/backgrounds/destapados.jpg'
import anImage from '../assets/backgrounds/anionuevo.jpg'
import perImage from '../assets/backgrounds/empresas.jpg'
import desconectados from '../assets/images/juegos/desconectados.png'
import destapados from '../assets/images/juegos/destapados.png'
import personalizado from '../assets/images/juegos/personalizado.png'
import anionuevo from '../assets/images/juegos/anionuevo.png'
import { Drawer, IconButton } from '@material-tailwind/react'

export default function JuegosInfo() {
  const [flippedCard, setFlippedCard] = useState<any>({
    desconectados: true,
    destapados: false,
    anionuevo: false,
    personalizados: false,
  })

  const [drawerOpen, setDrawerOpen] = useState<any>({
    desconectados: false,
    destapados: false,
    anionuevo: false,
    personalizados: false,
  })

  const handleDrawer = (card: string) => {
    setDrawerOpen({
      desconectados: false,
      destapados: false,
      anionuevo: false,
      personalizados: false,
      [card]: !drawerOpen[card],
    })
  }

  const handleFlip = (card: string) => {
    setFlippedCard({
      ...flippedCard,
      [card]: !flippedCard[card],
    })
  }

  return (
    <section className="max-w-8xl mx-auto lg:px-4" id="juegos">
      <h4
        className="text-3xl text-gray-800 lg:text-7xl mb-8"
        style={{
          fontFamily: 'PP Neue Montreal Medium',
          lineHeight: '1.2',
        }}
      >
        Conocé nuestros juegos <br />
        para{' '}
        <span
          className="text-[#584776]"
          style={{
            fontFamily: 'PP Neue Montreal Bold',
          }}
        >
          empresas
        </span>
      </h4>
      <div
        className="hidden lg:flex flex-row justify-center min-h-[500px]"
        style={{
          fontFamily: 'PP Neue Montreal Medium',
        }}
      >
        <div className="scene scene--card rounded-l-xl">
          <div
            className={`card ${flippedCard.desconectados ? 'is-flipped' : ''}`}
            onClick={() => handleFlip('desconectados')}
          >
            <div className="card__face card__face--front">
              <div
                className="text-center h-[450px] select-none rounded-tl-xl"
                style={{
                  backgroundImage: `url(${descImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>{' '}
              <p
                className="uppercase text-center text-xl text-[#584776]
              bg-gray-100 bg-opacity-30 rounded-bl-xl
              leading-[40px]
              "
              >
                <b>Des</b>
                <i>conectados</i>
              </p>
            </div>
            <div className="absolute card__face card__face--back">
              <div
                className="text-center h-[450px]
                    
                rounded-tl-xl"
                style={{
                  backgroundImage: `url(${descImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div
                  className="pb-8 px-6 text-justify text-gray-700 h-full rounded-tl-lg text-xs xl:text-sm"
                  style={{
                    backgroundImage:
                      'linear-gradient(to bottom, rgba(255,255,255,0.9) 0%,rgba(255,255,255,0.75) 100%)',
                  }}
                >
                  <img
                    src={desconectados}
                    alt="Desconectados"
                    className="mx-auto w-[200px] "
                  />
                  <p>
                    Es una invitación a encontrarnos con nuestra familia, pareja
                    y amistades. Las cartas que encontraran tienen el objetivo
                    de funcionar como disparadores para compartir creencias y
                    sensaciones que, muchas veces, el ritmo de vida nos lo
                    impide.
                  </p>
                  <br />
                  <p>Cuenta con cuatro secciones:</p>
                  <ul className="mt-2 text-left">
                    <li>
                      🤓<b>Perspectiva:</b> cartas para debatir e intercambiar
                      maneras de ver la vida
                    </li>
                    <li>
                      😁<b>Presentación:</b> cartas sobre gustos y preferencias
                    </li>
                    <li>
                      😌<b>Profundidad:</b> cartas para intimar
                    </li>
                    <li>
                      😜<b>Descomprimir:</b> cartas para relajar y activar tu
                      creatividad
                    </li>
                  </ul>
                </div>
              </div>
              <p
                className="uppercase text-center text-xl text-[#584776]
              bg-gray-50 bg-opacity-90 rounded-bl-xl
              leading-[40px]
              "
              >
                <b>Des</b>
                <i>conectados</i>
              </p>
            </div>
          </div>
        </div>
        <div className="scene scene--card">
          <div
            className={`card ${flippedCard.destapados ? 'is-flipped' : ''}`}
            onClick={() => handleFlip('destapados')}
          >
            <div className="card__face card__face--front">
              <div
                className="text-center h-[450px] select-none"
                style={{
                  backgroundImage: `url(${destImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>{' '}
              <p
                className="uppercase text-center text-xl text-[#584776]
              bg-gray-100 bg-opacity-30
              leading-[40px]
              "
              >
                <b>Des</b>
                <i>tapados</i>
              </p>
            </div>
            <div className="absolute card__face card__face--back">
              <div
                className="text-center h-[450px]"
                style={{
                  backgroundImage: `url(${destImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div
                  className="pb-8 px-6 text-justify text-gray-700 h-full text-xs xl:text-sm"
                  style={{
                    backgroundImage:
                      'linear-gradient(to bottom, rgba(255,255,255,0.9) 0%,rgba(255,255,255,0.75) 100%)',
                  }}
                >
                  <img
                    src={destapados}
                    alt="Destapados"
                    className="mx-auto w-[200px] "
                  />
                  <p>
                    Destapados es una invitación a intimar con nuestras parejas,
                    vínculos sexoafectivos y amistades. Las cartas que
                    encontrarán tienen el objetivo de funcionar como
                    disparadores para destapar prejuicios y abrirnos a la
                    exploración de ideas, experiencias y sentimientos en forma
                    colectiva.
                  </p>
                  <br />
                  <p>Cuenta con cuatro secciones:</p>
                  <ul className="mt-2 text-left">
                    <li>
                      🔥<b>Picantes:</b> cartas que encienden tus experiencias
                    </li>
                    <li>
                      🎲<b>Random:</b> cartas para improvisar
                    </li>
                    <li>
                      😌<b>Profundidad:</b> cartas para intimar
                    </li>
                    <li>
                      🤓<b>Perspectiva:</b> cartas para debatir sobre las
                      relaciones
                    </li>
                  </ul>
                </div>
              </div>
              <p
                className="uppercase text-center text-xl text-[#584776]
              bg-gray-50 bg-opacity-90 
              leading-[40px]
              "
              >
                <b>Des</b>
                <i>tapados</i>
              </p>
            </div>
          </div>
        </div>
        <div className="scene scene--card">
          <div
            className={`card ${flippedCard.anionuevo ? 'is-flipped' : ''}`}
            onClick={() => handleFlip('anionuevo')}
          >
            <div className="card__face card__face--front">
              <div
                className="text-center h-[450px] select-none"
                style={{
                  backgroundImage: `url(${anImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>{' '}
              <p
                className="uppercase text-center text-xl text-[#584776]
              bg-gray-100 bg-opacity-30
              leading-[40px] 
              "
              >
                <b>Año Nuevo</b>
              </p>
            </div>
            <div className="absolute card__face card__face--back">
              <div
                className="text-center h-[450px]"
                style={{
                  backgroundImage: `url(${anImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div
                  className="pb-8 px-6 text-justify text-gray-700 h-full text-xs xl:text-sm"
                  style={{
                    backgroundImage:
                      'linear-gradient(to bottom, rgba(255,255,255,0.9) 0%,rgba(255,255,255,0.75) 100%)',
                  }}
                >
                  <img
                    src={anionuevo}
                    alt="Año Nuevo"
                    className="mx-auto h-[100px] py-2"
                  />
                  <p>
                    Es una invitación a realizar un balance reflexivo del año
                    transitado para recibir con mayor conciencia al entrante.
                    Las cartas que encontrarán tienen el objetivo de funcionar
                    como disparadores para recorrer lo experimentado, realizar
                    un cierre de etapa y conectar con los deseos y objetivos en
                    las vísperas del próximo ciclo.
                  </p>
                  <br />
                  <p>Secciones:</p>
                  <ul className="mt-2 text-left">
                    <li>
                      💫<b>Retrospección:</b> cartas para registrar cómo te
                      hacen sentir tus experiencias pasadas
                    </li>
                    <br />

                    <li>
                      ✨<b>Proyección:</b> cartas que te guían a alcanzar lo que
                      te gustaría integrar
                    </li>
                  </ul>
                </div>
              </div>
              <p
                className="uppercase text-center text-xl text-[#584776]
              bg-gray-50 bg-opacity-90 
              leading-[40px] 
              "
              >
                <b>Año Nuevo</b>
              </p>
            </div>
          </div>
        </div>
        <div className="scene scene--card rounded-r-xl">
          <div
            className={`card ${flippedCard.personalizados ? 'is-flipped' : ''}`}
            onClick={() => handleFlip('personalizados')}
          >
            <div className="card__face card__face--front">
              <div
                className="text-center h-[450px] select-none rounded-tr-xl"
                style={{
                  backgroundImage: `url(${perImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>{' '}
              <p
                className="uppercase text-center text-xl text-[#584776]
              bg-gray-100 bg-opacity-30 rounded-br-xl
              leading-[40px]
              "
              >
                <b>Personalizados</b>
              </p>
            </div>
            <div className="absolute card__face card__face--back">
              <div
                className="text-center h-[450px]
                    
                rounded-tr-xl"
                style={{
                  backgroundImage: `url(${perImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div
                  className="pb-8 px-6 text-justify text-gray-700 h-full rounded-tr-lg text-xs xl:text-sm"
                  style={{
                    backgroundImage:
                      'linear-gradient(to bottom, rgba(255,255,255,0.9) 0%,rgba(255,255,255,0.75) 100%)',
                  }}
                >
                  <img
                    src={personalizado}
                    alt="Personalizado"
                    className="mx-auto w-[200px] "
                  />
                  <p>
                    Te invitamos a crear cartas con preguntas personalizadas
                    sobre la cultura o experiencia de tu marca. Las mismas deben
                    ser creadas por tu equipo y nosotras las adaptamos a un tono
                    amigable y profundo de En palabras.
                    <br />
                    <br />
                    Además, podés agregar el logo de tu empresa en la bolsa que
                    acompaña el juego.
                  </p>
                </div>
              </div>
              <p
                className="uppercase text-center text-xl text-[#584776]
              bg-gray-50 bg-opacity-90 rounded-br-xl
              leading-[40px]
              "
              >
                <b>Personalizados</b>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex lg:hidden flex-col gap-6 justify-start items-center w-full min-h-[650px]">
        <div className="flex flex-row mb-10 justify-around gap-6 w-full items-center">
          <div
            className="w-full !h-[250px]"
            onClick={() => handleDrawer('desconectados')}
          >
            <div
              className="text-center h-full w-full select-none rounded-t-xl"
              style={{
                backgroundImage: `url(${descImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>{' '}
            <p
              className="uppercase text-center text-lg text-[#584776]
              bg-gray-100 bg-opacity-30 rounded-b-xl
              leading-[40px]
              "
            >
              <b>Des</b>
              <i>conectados</i>
            </p>
          </div>
          <div
            className="w-full !h-[250px]"
            onClick={() => handleDrawer('destapados')}
          >
            <div
              className="text-center h-full w-full select-none rounded-t-xl"
              style={{
                backgroundImage: `url(${destImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>{' '}
            <p
              className="uppercase text-center text-lg text-[#584776]
              bg-gray-100 bg-opacity-30 rounded-b-xl
              leading-[40px]
              "
            >
              <b>Des</b>
              <i>tapados</i>
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-around gap-6 w-full items-center">
          <div
            className="w-full !h-[250px]"
            onClick={() => handleDrawer('anionuevo')}
          >
            <div
              className="text-center h-full w-full select-none rounded-t-xl"
              style={{
                backgroundImage: `url(${anImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>{' '}
            <p
              className="uppercase text-center text-lg text-[#584776]
              bg-gray-100 bg-opacity-30 rounded-b-xl
              leading-[40px]
              "
            >
              <b>Año Nuevo</b>
            </p>
          </div>
          <div
            className="w-full !h-[250px]"
            onClick={() => handleDrawer('personalizados')}
          >
            <div
              className="text-center h-full w-full select-none rounded-t-xl"
              style={{
                backgroundImage: `url(${perImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>{' '}
            <p
              className="uppercase text-center text-lg text-[#584776]
              bg-gray-100 bg-opacity-30 rounded-b-xl
              leading-[40px]
              "
            >
              <b>Personalizados</b>
            </p>
          </div>
        </div>
      </div>
      <Drawer
        placement="left"
        open={drawerOpen.desconectados}
        onClose={() => handleDrawer('desconectados')}
        className="p-4 bg-[#aea3c6] 
        flex flex-col justify-between"
      >
        <div className="mb-6 flex items-center justify-between">
          <div></div>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={() => handleDrawer('desconectados')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="flex flex-col text-sm">
          <img src={desconectados} alt="Desconectados" className="mx-auto" />
          <p className="text-justify">
            Es una invitación a encontrarnos con nuestra familia, pareja y
            amistades. Las cartas que encontraran tienen el objetivo de
            funcionar como disparadores para compartir creencias y sensaciones
            que, muchas veces, el ritmo de vida nos lo impide.
          </p>
          <br />
          <p>Cuenta con cuatro secciones:</p>
          <ul className="mt-2 text-left">
            <li className="mb-2">
              🤓<b> Perspectiva:</b> cartas para debatir e intercambiar maneras
              de ver la vida
            </li>
            <li className="mb-2">
              😁<b> Presentación:</b> cartas sobre gustos y preferencias
            </li>
            <li className="mb-2">
              😌<b> Profundidad:</b> cartas para intimar
            </li>
            <li className="mb-2">
              😜<b> Descomprimir:</b> cartas para relajar y activar tu
              creatividad
            </li>
          </ul>
        </div>
        <hr className="my-4 border-gray-500" />
        <div className="flex justify-between w-full gap-2">
          <div
            className="rounded-lg bg-gray-50 w-full bg-opacity-30"
            onClick={() => {
              setDrawerOpen({
                desconectados: false,
                destapados: false,
                anionuevo: false,
                personalizados: false,
              })
              setTimeout(() => {
                handleDrawer('anionuevo')
              }, 500)
            }}
          >
            <img src={anionuevo} alt="Año Nuevo" className="mx-auto h-16" />
          </div>
          <div
            className="rounded-lg bg-gray-50 w-full bg-opacity-30"
            onClick={() => {
              setDrawerOpen({
                desconectados: false,
                destapados: false,
                anionuevo: false,
                personalizados: false,
              })
              setTimeout(() => {
                handleDrawer('destapados')
              }, 500)
            }}
          >
            <img src={destapados} alt="Destapados" className="mx-auto h-16" />
          </div>
          <div
            className="rounded-lg bg-gray-50 w-full bg-opacity-30"
            onClick={() => {
              setDrawerOpen({
                desconectados: false,
                destapados: false,
                anionuevo: false,
                personalizados: false,
              })
              setTimeout(() => {
                handleDrawer('personalizados')
              }, 500)
            }}
          >
            <img
              src={personalizado}
              alt="Personalizados"
              className="mx-auto h-16"
            />
          </div>
        </div>
      </Drawer>

      <Drawer
        placement="left"
        open={drawerOpen.anionuevo}
        onClose={() => handleDrawer('anionuevo')}
        className="p-4 bg-[#aea3c6] 
        flex flex-col justify-between"
      >
        <div className="mb-6 flex items-center justify-between">
          <div></div>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={() => handleDrawer('anionuevo')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="flex flex-col text-sm">
          <img
            src={anionuevo}
            alt="Año Nuevo"
            className="mx-auto max-h-[150px] mb-8"
          />
          <p className="text-justify">
            Es una invitación a realizar un balance reflexivo del año transitado
            para recibir con mayor conciencia al entrante. Las cartas que
            encontrarán tienen el objetivo de funcionar como disparadores para
            recorrer lo experimentado, realizar un cierre de etapa y conectar
            con los deseos y objetivos en las vísperas del próximo ciclo.
          </p>
          <br />
          <p>Secciones:</p>
          <ul className="mt-2 text-left">
            <li>
              💫<b>Retrospección:</b> cartas para registrar cómo te hacen sentir
              tus experiencias pasadas
            </li>
            <br />

            <li>
              ✨<b>Proyección:</b> cartas que te guían a alcanzar lo que te
              gustaría integrar
            </li>
          </ul>
        </div>
        <hr className="my-4 border-gray-500" />
        <div className="flex justify-between w-full gap-2">
          <div
            className="rounded-lg bg-gray-50 w-full bg-opacity-30"
            onClick={() => {
              setDrawerOpen({
                desconectados: false,
                destapados: false,
                anionuevo: false,
                personalizados: false,
              })
              setTimeout(() => {
                handleDrawer('desconectados')
              }, 500)
            }}
          >
            <img
              src={desconectados}
              alt="Desconectados"
              className="mx-auto h-16"
            />
          </div>
          <div
            className="rounded-lg bg-gray-50 w-full bg-opacity-30"
            onClick={() => {
              setDrawerOpen({
                desconectados: false,
                destapados: false,
                anionuevo: false,
                personalizados: false,
              })
              setTimeout(() => {
                handleDrawer('destapados')
              }, 500)
            }}
          >
            <img src={destapados} alt="Destapados" className="mx-auto h-16" />
          </div>
          <div
            className="rounded-lg bg-gray-50 w-full bg-opacity-30"
            onClick={() => {
              setDrawerOpen({
                desconectados: false,
                destapados: false,
                anionuevo: false,
                personalizados: false,
              })
              setTimeout(() => {
                handleDrawer('personalizados')
              }, 500)
            }}
          >
            <img
              src={personalizado}
              alt="Personalizados"
              className="mx-auto h-16"
            />
          </div>
        </div>
      </Drawer>

      <Drawer
        placement="right"
        open={drawerOpen.destapados}
        onClose={() => handleDrawer('destapados')}
        className="p-4 bg-[#aea3c6] 
        flex flex-col justify-between"
      >
        <div className="mb-6 flex items-center justify-between">
          <div></div>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={() => handleDrawer('destapados')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="flex flex-col text-sm">
          <img src={destapados} alt="Destapados" className="mx-auto" />
          <p className="text-justify">
            Destapados es una invitación a intimar con nuestras parejas,
            vínculos sexoafectivos y amistades. Las cartas que encontrarán
            tienen el objetivo de funcionar como disparadores para destapar
            prejuicios y abrirnos a la exploración de ideas, experiencias y
            sentimientos en forma colectiva.
          </p>
          <br />
          <p>Cuenta con cuatro secciones:</p>
          <ul className="mt-2 text-left">
            <li className="mb-2">
              🔥<b> Picantes:</b> cartas que encienden tus experiencias
            </li>
            <li className="mb-2">
              🎲<b>Random:</b> cartas para improvisar
            </li>
            <li className="mb-2">
              😌<b> Profundidad:</b> cartas para intimar
            </li>
            <li className="mb-2">
              🤓<b> Perspectiva:</b> cartas para debatir sobre las relaciones
            </li>
          </ul>
        </div>
        <hr className="my-4 border-gray-500" />
        <div className="flex justify-between w-full gap-2">
          <div
            className="rounded-lg bg-gray-50 w-full bg-opacity-30"
            onClick={() => {
              setDrawerOpen({
                desconectados: false,
                destapados: false,
                anionuevo: false,
                personalizados: false,
              })
              setTimeout(() => {
                handleDrawer('desconectados')
              }, 500)
            }}
          >
            <img
              src={desconectados}
              alt="Desconectados"
              className="mx-auto h-16"
            />
          </div>
          <div
            className="rounded-lg bg-gray-50 w-full bg-opacity-30"
            onClick={() => {
              setDrawerOpen({
                desconectados: false,
                destapados: false,
                anionuevo: false,
                personalizados: false,
              })
              setTimeout(() => {
                handleDrawer('anionuevo')
              }, 500)
            }}
          >
            <img src={anionuevo} alt="Año Nuevo" className="mx-auto h-16" />
          </div>
          <div
            className="rounded-lg bg-gray-50 w-full bg-opacity-30"
            onClick={() => {
              setDrawerOpen({
                desconectados: false,
                destapados: false,
                anionuevo: false,
                personalizados: false,
              })
              setTimeout(() => {
                handleDrawer('personalizados')
              }, 500)
            }}
          >
            <img
              src={personalizado}
              alt="Personalizados"
              className="mx-auto h-16"
            />
          </div>
        </div>
      </Drawer>

      <Drawer
        placement="right"
        open={drawerOpen.personalizados}
        onClose={() => handleDrawer('personalizados')}
        className="p-4 bg-[#aea3c6] 
        flex flex-col justify-between"
      >
        <div className="mb-6 flex items-center justify-between">
          <div></div>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={() => handleDrawer('personalizados')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="flex flex-col text-sm">
          <img src={personalizado} alt="Personalizado" className="mx-auto" />
          <p className="text-justify">
            Te invitamos a crear cartas con preguntas personalizadas sobre la
            cultura o experiencia de tu marca. Las mismas deben ser creadas por
            tu equipo y nosotras las adaptamos a un tono amigable y profundo de
            En palabras.
            <br />
            <br />
            Además, podés agregar el logo de tu empresa en la bolsa que acompaña
            el juego.
          </p>
        </div>
        <hr className="my-4 border-gray-500" />
        <div className="flex justify-between w-full gap-2">
          <div
            className="rounded-lg bg-gray-50 w-full bg-opacity-30"
            onClick={() => {
              setDrawerOpen({
                desconectados: false,
                destapados: false,
                anionuevo: false,
                personalizados: false,
              })
              setTimeout(() => {
                handleDrawer('desconectados')
              }, 500)
            }}
          >
            <img
              src={desconectados}
              alt="Desconectados"
              className="mx-auto h-16"
            />
          </div>
          <div
            className="rounded-lg bg-gray-50 w-full bg-opacity-30"
            onClick={() => {
              setDrawerOpen({
                desconectados: false,
                destapados: false,
                anionuevo: false,
                personalizados: false,
              })
              setTimeout(() => {
                handleDrawer('anionuevo')
              }, 500)
            }}
          >
            <img src={anionuevo} alt="Año Nuevo" className="mx-auto h-16" />
          </div>
          <div
            className="rounded-lg bg-gray-50 w-full bg-opacity-30"
            onClick={() => {
              setDrawerOpen({
                desconectados: false,
                destapados: false,
                anionuevo: false,
                personalizados: false,
              })
              setTimeout(() => {
                handleDrawer('destapados')
              }, 500)
            }}
          >
            <img src={destapados} alt="Destapados" className="mx-auto h-16" />
          </div>
        </div>
      </Drawer>
    </section>
  )
}
