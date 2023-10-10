export default function HeroSection() {
  return (
    <section
      className="w-full flex flex-col md:flex-row mb-10 md:mb-0 md:my-10
    justify-around items-center max-w-5xl px-4 "
    >
      <div
        className="flex order-last md:order-first flex-col 
      justify-center items-center w-full max-w-[330px]"
      >
        <div className="flex flex-row justify-around items-center w-full ">
          <p className="text-9xl font-bold">NO</p>
          <div className="flex justify-between  flex-col pt-4 text-xl font-semibold text-left">
            <p>somos un</p>

            <p>regalo</p>
            <p>corporativo.</p>
          </div>
          {/* <p className="text-xl font-semibold text-left h-full leading-19">
            somos un <br /> regalo
            <br /> corporativo.
          </p> */}
        </div>
        <p className="text-justify text-sm">
          Somos la <span className="italic font-semibold">conexión</span> que
          inspira a tu equipo a forjar relaciones más profundas, genuinas y
          empáticas. <br />
          Fomentamos la colaboración y la creatividad a través de nuestras
          experiencias lúdicas.
        </p>
        <button
          className="w-2/3 mx-auto py-4 mt-8
            border-2 border-gray-900 text-lg
            hover:bg-gray-900 hover:text-white
            transition duration-300 ease-in-out
        "
        >
          Comencemos.
        </button>
      </div>
      <div className="order-first md:order-last">
        <img
          src="./src/assets/manoCarta.png"
          alt="mano con carta"
          className="max-h-[400px]"
        />
      </div>
    </section>
  )
}
