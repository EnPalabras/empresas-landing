import desktopBg from '../assets/images/juegos/page/desktop/heroimage.png'
import mobileBg from '../assets/images/juegos/page/mobile/herophoto.jpg'

export default function HeroSection() {
  return (
    <section className="max-w-8xl my-4 mb-14 mx-auto px-3 lg:px-4">
      <div
        className="hidden lg:flex rounded-lg"
        style={{
          backgroundImage: `url(${desktopBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '90vh',
          fontFamily: 'PP Neue Montreal Medium',
        }}
      >
        <div
          className="absolute top-[50%] bg-[#aea3c6] 
          bg-opacity-90 text-gray-900 
        max-w-8xl
        space-y-8
        rounded-r-sm
        pl-[7%] pr-[8%]
        py-6 transform -translate-y-1/3 -translate-x-[10%]"
        >
          <p className="text-4xl xl:text-7xl pl-[5%]">
            <span className="font-bold text-[#584776]">No</span> somos un regalo
            <br />
            corporativo
          </p>

          <p className="max-w-3xl text-md xl:text-xl pl-[5%]">
            Somos la conexión que inspira a tu equipo a forjar relaciones más
            profundas, genuinas y empáticas. Fomentamos la colaboración y la
            creatividad a través de nuestras experiencias lúdicas
          </p>
          <div></div>
        </div>
      </div>

      <div
        className="flex lg:hidden rounded-lg"
        style={{
          backgroundImage: `url(${mobileBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '80vh',
        }}
      >
        <div
          className="absolute top-[50%] bg-[#aea3c6] 
          bg-opacity-90 text-gray-900 
        max-w-8xl
        space-y-8
        rounded-r-sm
        pl-[7%] pr-[8%]
        pt-5 pb-8 transform -translate-y-1/4 -translate-x-[10%]"
        >
          <p className="text-4xl xl:text-7xl pl-[5%]">
            <span className="font-bold text-[#584776]">No</span> somos un regalo
            <br />
            corporativo
          </p>

          <p className="max-w-3xl text-sm pl-[5%]">
            Somos la conexión que inspira a tu equipo a forjar relaciones más
            profundas, genuinas y empáticas. Fomentamos la colaboración y la
            creatividad a través de nuestras experiencias lúdicas
          </p>
          <div></div>
        </div>
      </div>
    </section>
  )
}
