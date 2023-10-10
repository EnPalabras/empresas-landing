import { initFlowbite } from 'flowbite'
import { useEffect } from 'react'

export function Header2() {
  useEffect(() => {
    initFlowbite()
  }, [])

  return (
    <>
      <nav className="max-w-6xl flex flex-row w-full items-center my-2 px-4 mt-4">
        <a
          href="https://enpalabras.com.ar/"
          className="flex w-full md:w-2/3 items-center"
        >
          <img
            src="https://acdn.mitiendanube.com/stores/001/705/915/themes/common/logo-406989337-1661261292-f275c90c94f38041bb3595811ed7d4b31661261293-320-0.webp"
            className="
          max-w-[200px]
      "
            alt="En Palabras Logo"
          />
        </a>
        <div
          className="hidden md:flex 
         
        flex-row justify-end items-center w-full"
        >
          <ul className="flex justify-around items-center gap-2 w-full">
            <li
              className="text-md lg:text-lg
            cursor-pointer
            hover:text-blue-500
            transition duration-500 ease-in-out
            "
            >
              <a
                href="/"
                onClick={() => {
                  window.scrollTo(0, 0)
                }}
              />
              Inicio
            </li>

            <li
              className="text-md lg:text-lg
            cursor-pointer
            hover:text-blue-500
            transition duration-500 ease-in-out
            "
            >
              <a href="#testimonios" />
              Testimonios
            </li>
            <li
              className="text-md lg:text-lg
            cursor-pointer
            hover:text-blue-500
            transition duration-500 ease-in-out
            "
            >
              <a href="#contacto" />
              Formulario
            </li>
            <li
              className="text-md lg:text-lg
            cursor-pointer
            hover:text-blue-500
            transition duration-500 ease-in-out
            "
            >
              <a href="https://enpalabras.com.ar" />
              Tienda Online
            </li>
          </ul>
        </div>
        <div className="text-center">
          <button
            type="button"
            data-drawer-target="drawer-right-example"
            data-drawer-show="drawer-right-example"
            data-drawer-hide="drawer-right-example"
            data-drawer-placement="right"
            data-drawer-backdrop="false"
            aria-controls="drawer-right-example"
            className="inline-flex items-center w-14 h-14 justify-center 
          text-sm text-gray-500 rounded-lg md:hidden 
         "
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-7 h-7"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          id="drawer-right-example"
          className="fixed top-0 right-0 z-40 h-screen px-4 overflow-y-auto 
          transition-transform translate-x-full bg-white w-80 
          shadow-lg
          border-l dark:bg-gray-800 dark:border-gray-70
          "
          tabIndex={-1}
          aria-labelledby="drawer-right-label"
        >
          <div className="mb-2 flex items-center justify-between p-4">
            <img
              src="https://acdn.mitiendanube.com/stores/001/705/915/themes/common/logo-406989337-1661261292-f275c90c94f38041bb3595811ed7d4b31661261293-320-0.webp"
              className="
          max-w-[150px]
      "
              alt="En Palabras Logo"
            />
            <button
              type="button"
              data-drawer-hide="drawer-right-example"
              aria-controls="drawer-right-example"
              className="text-gray-400 bg-transparent 
            hover:bg-gray-200 hover:text-gray-900 rounded-lg 
            text-sm w-8 h-8 items-center justify-center text-center
            "
            >
              <svg
                className="w-4 h-4 mx-auto"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <div className="py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center 
                  p-2 text-gray-900 rounded-lg 
                  hover:bg-gray-100 group"
                >
                  <span className="">Inicio</span>
                </a>
              </li>
              <li>
                <a
                  href="/#nosotros"
                  data-drawer-hide="drawer-right-example"
                  className="flex items-center justify-center 
                  p-2 text-gray-900 rounded-lg 
                  hover:bg-gray-100 group"
                >
                  <span className="">Nosotros</span>
                </a>
              </li>
              <li>
                <a
                  href="/#testimonios"
                  data-drawer-hide="drawer-right-example"
                  className="flex items-center justify-center 
                  p-2 text-gray-900 rounded-lg 
                  hover:bg-gray-100 group"
                >
                  <span className=" ">Testimonios</span>
                </a>
              </li>
              <li>
                <a
                  href="/#preguntas"
                  data-drawer-hide="drawer-right-example"
                  className="flex items-center justify-center 
                  p-2 text-gray-900 rounded-lg 
                  hover:bg-gray-100 group"
                >
                  <span className=" ">Preguntas</span>
                </a>
              </li>
              <hr />
              <li>
                <a
                  href="https://enpalabras.com.ar/"
                  target="_blank"
                  data-drawer-hide="drawer-right-example"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                  </svg>
                  <span className="flex-1  whitespace-nowrap">
                    Tienda Online
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
