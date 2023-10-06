export default function SocialProof2() {
  return (
    <section
      className="w-full flex flex-row items-center justify-between"
      id="social-proof"
    >
      <div
        className="w-3/5 hidden md:block max-w-[600px]
        bg-[url('./assets/socialproof.jpeg')] bg-cover bg-center bg-no-repeat
      "
        style={{
          alignSelf: 'stretch',
          flex: 'auto',
        }}
      ></div>
      <div
        className="flex flex-col gap-8 my-10 
        text-center w-full mx-auto px-4 md:px-20
      "
      >
        <h1 className="font-bold text-3xl select-text ">
          ¿Para qué tener conversaciones profundas en tu empresa?
        </h1>
        <p className="">
          Las experiencias de nuestros usuarios dan cuenta de un cambio en la
          dinámica laboral. Una necesidad de{' '}
          <b>mejorar las relaciones en el equipo </b>y la posibilidad de conocer
          nuevas facetas y puntos en común <b>para conectar.</b>
        </p>
        <p>
          Por eso desde En Palabras, nos comprometemos y elegimos crear
          dinámicas que faciliten conversaciones profundas y reflexivas así,
          quien elige jugar, guarda en su memoria una experiencia significativa
          sobre sus deseos que recordará en el tiempo.
        </p>
        <p className="font-bold">Innová regalando una charla de En Palabras</p>
        <div className="w-full flex  items-center justify-around">
          <div className="flex w-full flex-col items-center justify-center">
            <p className="mb-2 text-3xl md:text-4xl font-extrabold">+16</p>
            <p className="font-light">países</p>
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <p className="mb-2 text-3xl md:text-4xl font-extrabold">35</p>
            <p className="font-light">
              colaboraciones <br /> con empresas
            </p>
          </div>
        </div>
        <div className="w-full flex  items-center justify-around">
          <div className="flex w-full flex-col items-center justify-center">
            <p className="mb-2 text-3xl md:text-4xl font-extrabold">+100K</p>
            <p className="font-light text-2xl md:text-3xl">juegos vendidos</p>
          </div>
        </div>
      </div>
    </section>
  )
}
