import Instagram from '../assets/Icons/InstagramIcon'
import TikTok from '../assets/Icons/TikTokIcon'

export default function Footer() {
  return (
    <footer className="bg-[#584776]  text-white mt-10 py-10 px-8">
      <div className="flex lg:hidden flex-col justify-between gap-4 ">
        <div
          className="mb-4"
          style={{
            fontFamily: 'PP Neue Montreal Medium',
            fontSize: '2.2rem',
          }}
        >
          ¿Necesitas ayuda?
        </div>
        <div className="flex flex-row justify-between w-full">
          <div className="text-left w-2/3">
            Podes escribirnos a nuestro mail enpalabrass@gmail.com para resolver
            dudas sobre tu pedido.
          </div>
          <div className="flex flex-row gap-2 justify-end items-end w-1/3">
            <a
              className="w-1/3"
              href="https://instagram.com/enpalabrass"
              target="_blank"
            >
              <Instagram />
            </a>
            <a
              className="w-1/3"
              href="https://tiktok.com/@enpalabrass"
              target="_blank"
            >
              <TikTok />
            </a>
          </div>
        </div>
        {/* <div className="flex flex-col gap-4 text-left">
          Podes escribirnos a nuestro mail enpalabrass@gmail.com para resolver
          dudas sobre tu pedido.
        </div>
        <div className="flex justify-center items-end flex-row gap-4 mt-8">
          <div className="w-1/6">
            <Instagram />
          </div>
          <div className="w-1/6">
            <TikTok />
          </div>
        </div> */}
      </div>
      <div className="hidden max-w-6xl mx-auto lg:flex flex-col justify-between gap-4 ">
        <div
          className="mb-4"
          style={{
            fontFamily: 'PP Neue Montreal Medium',
            fontSize: '4rem',
          }}
        >
          ¿Necesitas ayuda?
        </div>
        <div className="flex flex-row justify-between w-full">
          <div className="text-left w-1/3 text-xl">
            Podes escribirnos a nuestro mail enpalabrass@gmail.com para resolver
            dudas sobre tu pedido.
          </div>
          <div className="flex flex-row gap-2 justify-end items-end w-1/3">
            <a
              className="w-1/6"
              href="https://instagram.com/enpalabrass"
              target="_blank"
            >
              <Instagram />
            </a>
            <a
              className="w-1/6"
              href="https://tiktok.com/@enpalabrass"
              target="_blank"
            >
              <TikTok />
            </a>
          </div>
        </div>
        {/* <div className="flex flex-col gap-4 text-left">
          Podes escribirnos a nuestro mail enpalabrass@gmail.com para resolver
          dudas sobre tu pedido.
        </div>
        <div className="flex justify-center items-end flex-row gap-4 mt-8">
          <div className="w-1/6">
            <Instagram />
          </div>
          <div className="w-1/6">
            <TikTok />
          </div>
        </div> */}
      </div>
    </footer>
  )
}
