import { useState } from 'react'
const PlusIcon = () => {
  return (
    <svg
      className="w-10 h-10 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.546.5a9.5 9.5 0 1 0 9.5 9.5 9.51 9.51 0 0 0-9.5-9.5ZM13.788 11h-3.242v3.242a1 1 0 1 1-2 0V11H5.304a1 1 0 0 1 0-2h3.242V5.758a1 1 0 0 1 2 0V9h3.242a1 1 0 1 1 0 2Z" />
    </svg>
  )
}

export default function InfoJuegos() {
  const [open, setOpen] = useState(true)

  return (
    <div className="bg-red-100 w-full flex flex-col p-4">
      <h2 className="text-3xl font-bold text-center mb-4">
        Conocé nuestros juegos para empresas
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4">
        <div className="flex flex-col gap-2 justify-center items-center">
          <img
            src="https://acdn.mitiendanube.com/stores/001/705/915/products/juego-para-familias1-e967b8ecf1aad2e0bf16728584939231-1024-1024.webp"
            alt="Juego de cartas"
            className="max-h-[200px] mx-auto "
          />
          <div className="flex flex-row justify-center items-center mr-6 cursor-pointer">
            <div className="translate-x-1/2 bg-white rounded-full">
              <PlusIcon />
            </div>
            <button
              className="bg-gray-50 font-bold 
                border-2 border-gray-900
            rounded-3xl px-6 py-4 min-w-[170px]"
            >
              Desconectados
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <img
            src="https://acdn.mitiendanube.com/stores/001/705/915/products/juego-para-familias1-e967b8ecf1aad2e0bf16728584939231-1024-1024.webp"
            alt="Juego de cartas"
            className="max-h-[200px] mx-auto "
          />
          <div className="flex flex-row justify-center items-center mr-6 cursor-pointer">
            <div className="translate-x-1/2 bg-white rounded-full">
              <PlusIcon />
            </div>
            <button
              className="bg-gray-50 font-bold 
                border-2 border-gray-900
            rounded-3xl px-6 py-4 min-w-[170px]"
            >
              Personalizado
            </button>
          </div>
        </div>{' '}
        <div className="flex flex-col gap-2 justify-center items-center">
          <img
            src="https://acdn.mitiendanube.com/stores/001/705/915/products/juego-para-familias1-e967b8ecf1aad2e0bf16728584939231-1024-1024.webp"
            alt="Juego de cartas"
            className="max-h-[200px] mx-auto "
          />
          <div className="flex flex-row justify-center items-center mr-6 cursor-pointer">
            <div className="translate-x-1/2 bg-white rounded-full">
              <PlusIcon />
            </div>
            <button
              className="bg-gray-50 font-bold 
                border-2 border-gray-900
            rounded-3xl px-6 py-4 min-w-[170px]"
            >
              Año Nuevo
            </button>
          </div>
        </div>{' '}
        <div className="flex flex-col gap-2 justify-center items-center">
          <img
            src="https://acdn.mitiendanube.com/stores/001/705/915/products/juego-para-familias1-e967b8ecf1aad2e0bf16728584939231-1024-1024.webp"
            alt="Juego de cartas"
            className="max-h-[200px] mx-auto "
          />
          <div className="flex flex-row justify-center items-center mr-6 cursor-pointer">
            <div className="translate-x-1/2 bg-white rounded-full">
              <PlusIcon />
            </div>
            <button
              className="bg-gray-50 font-bold 
                border-2 border-gray-900
            rounded-3xl px-6 py-4 min-w-[170px]"
            >
              Destapados
            </button>
          </div>
        </div>{' '}
      </div>
    </div>
  )
}
