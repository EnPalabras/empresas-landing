import { useState } from 'react'
import { Drawer, IconButton, List, ListItem } from '@material-tailwind/react'
import Hamburger from '../assets/Icons/HamburgerIcon'
import logo from '../assets/logos/logoep2.png'
import TikTok from '../assets/Icons/TikTokIcon'
import Instagram from '../assets/Icons/InstagramIcon'

export default function Header() {
  const [openRight, setOpenRight] = useState<boolean>(false)

  const toggleDrawer = () => setOpenRight(!openRight)

  return (
    <header
      className="flex flex-row select-none max-w-4xl mx-auto
      "
      style={{
        fontFamily: 'PP Neue Montreal Thin',
        fontWeight: 700,
      }}
    >
      <div
        className="hidden lg:flex flex-row w-full justify-between items-center
      "
      >
        <a
          type="button"
          onClick={() => {
            scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }}
        >
          Inicio
        </a>
        <a href="https://enpalabras.com.ar" type="button" target="_blank">
          Tienda
        </a>
        <div>
          <img src={logo} alt="logo" className="max-w-[250px]" />
        </div>
        <a href="#testimonios" type="button">
          Testimonios
        </a>
        <a href="#formulario" type="button">
          Formulario
        </a>
      </div>

      <div className="flex lg:hidden w-full justify-between items-center">
        <div className="w-[40px]"></div>
        <div>
          <img src={logo} alt="logo" className="max-w-[200px]" />
        </div>
        <button onClick={toggleDrawer}>
          <Hamburger />
        </button>
      </div>

      <Drawer
        placement="right"
        open={openRight}
        onClose={toggleDrawer}
        className={`p-4 bg-[#aea3c6] 
        flex flex-col justify-between
        z-1
        `}
      >
        <div>
          <div className="mb-6 flex items-center justify-between">
            <div></div>
            <IconButton variant="text" color="blue-gray" onClick={toggleDrawer}>
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
          <List className="mb-8 pr-4 gap-6 font-normal">
            <ListItem
              className="
              flex items-center w-full p-3 text-start leading-tight 
              transition-all 
              hover:bg-opacity-90 focus:bg-opacity-90 
              active:bg-transparent active:bg-transparent
              focus:text-black active:text-black 
              outline-none           
              hover:text-black border-b
                pl-0
                border-gray-500
                rounded-none
                hover:bg-transparent
                hover:border-black
                focus:outline-none
                focus:bg-transparent
            "
              onClick={() => {
                setOpenRight(false)
                scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }}
            >
              Home
            </ListItem>
            <a
              href="https://enpalabras.com.ar"
              target="_blank"
              onClick={() => {
                setOpenRight(false)
              }}
            >
              <ListItem
                className=" flex items-center w-full p-3 text-start leading-tight 
              transition-all 
              hover:bg-opacity-90 focus:bg-opacity-90 
              active:bg-transparent active:bg-transparent
              focus:text-black active:text-black 
              outline-none           
              hover:text-black border-b
                pl-0
                border-gray-500
                rounded-none
                hover:bg-transparent
                hover:border-black
                focus:outline-none
                focus:bg-transparent
            "
              >
                Tienda
              </ListItem>
            </a>
            <a
              href="#testimonios"
              onClick={() => {
                setOpenRight(false)
              }}
            >
              <ListItem
                className=" flex items-center w-full p-3 text-start leading-tight 
              transition-all 
              hover:bg-opacity-90 focus:bg-opacity-90 
              active:bg-transparent active:bg-transparent
              focus:text-black active:text-black 
              outline-none           
              hover:text-black border-b
                pl-0
                border-gray-500
                rounded-none
                hover:bg-transparent
                hover:border-black
                focus:outline-none
                focus:bg-transparent
            "
              >
                Testimonios
              </ListItem>
            </a>
            <a
              href="#formulario"
              onClick={() => {
                setOpenRight(false)
              }}
            >
              <ListItem
                className=" flex items-center w-full p-3 text-start leading-tight 
              transition-all 
              hover:bg-opacity-90 focus:bg-opacity-90 
              active:bg-transparent active:bg-transparent
              focus:text-black active:text-black 
              outline-none           
              hover:text-black border-b
                pl-0
                border-gray-500
                rounded-none
                hover:bg-transparent
                hover:border-black
                focus:outline-none
                focus:bg-transparent
            "
              >
                Formulario
              </ListItem>
            </a>
          </List>
        </div>
        <div
          className="flex flex-col gap-2 items-start border-b
                border-gray-500 text-[#455a64]"
        >
          <a
            href="mailto:enpalabrass@gmail.com"
            onClick={() => {
              setOpenRight(false)
            }}
          >
            <p className="pl-4  hover:text-black transition duration-200">
              enpalabrass@gmail.com
            </p>
          </a>
          <div className="flex gap-2 justify-start items-center">
            <a
              href="https://instagram.com/enpalabrass"
              target="_blank"
              className="h-16 w-16 hover:text-black transition duration-200"
              onClick={() => {
                setOpenRight(false)
              }}
            >
              <Instagram />
            </a>
            <a
              href="https://tiktok.com/@enpalabrass"
              target="_blank"
              className="h-14 w-14 hover:text-black transition duration-200"
              onClick={() => {
                setOpenRight(false)
              }}
            >
              <TikTok />
            </a>
          </div>
        </div>
      </Drawer>
    </header>
  )
}
