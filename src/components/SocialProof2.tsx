export default function SocialProof2() {
  return (
    <section
      className="w-full my-10 flex flex-row items-center justify-between"
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
        text-center w-full mx-auto px-20
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
        <div className="">
          <div className="px-4 mt-10 py-6 mx-auto text-center ">
            <dl
              className="flex flex-row justify-between gap-8 
            text-gray-900 dark:text-white"
            >
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                  +16
                </dt>
                <dd className="font-light">países</dd>
              </div>
              <div className="flex flex-col -translate-y-1/2 items-center justify-center">
                <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
                  +100K
                </dt>
                <dd className="ml-2 font-light text-2xl md:text-3xl text-dark">
                  juegos vendidos
                </dd>
              </div>
              <div className="flex flex-col items-center justify-center">
                <dt className="mb-2 text-3xl md:text-4xl font-extrabold">35</dt>
                <dd className="font-light">
                  colaboraciones <br /> con empresas
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
