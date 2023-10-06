export default function CTAFooter() {
  return (
    <section className="container my-20 mx-auto md:px-6 text-center max-w-4xl lg:text-left">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
        <h3
          className="text-4xl md:text-5xl  font-bold text-center md:text-left"
          style={{
            fontFamily: 'sans-serif',
          }}
        >
          ¿Necesitás mas <br className="hidden md:block" /> ayuda?
        </h3>
        <a href="#contact">
          <button
            className="
        uppercase border-2 border-primary px-8 py-3 border-gray-900
        hover:bg-gray-900 hover:text-white transition duration-200 ease-in-out
        "
          >
            Contactanos
          </button>
        </a>
      </div>
    </section>
  )
}
