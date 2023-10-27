import { useState } from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react'

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
}

function Icon({ id, open }: { id: number; open: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? 'rotate-180' : ''
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value)

  return (
    <section
      className="
     px-4 py-10 lg:py-14
    "
    >
      <div
        className="max-w-6xl my-10 mx-auto px-2 lg:px-4"
        id="faq"
        style={{
          fontFamily: 'PP Neue Montreal Thin',
        }}
      >
        <h4
          className="text-3xl mb-10 text-center text-gray-800 lg:text-7xl"
          style={{
            fontFamily: 'PP Neue Montreal Bold',
            lineHeight: '1.2',
          }}
        >
          Preguntas Frecuentes
        </h4>
        <>
          <Accordion
            icon={<Icon id={1} open={open} />}
            open={open === 1}
            animate={CUSTOM_ANIMATION}
            className={`${open === 1 ? '' : 'border-b border-gray-400'}`}
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={`border-b-0 transition-colors ${
                open === 1
                  ? 'bg-[#aea3c6] text-[#584776] hover:!text-opacity-90 px-8 '
                  : 'px-8 '
              }`}
            >
              Cartas Personalizadas
            </AccordionHeader>
            <AccordionBody className="px-10">
              <CartasPersonalizadas />
            </AccordionBody>
          </Accordion>
          <Accordion
            icon={<Icon id={2} open={open} />}
            open={open === 2}
            animate={CUSTOM_ANIMATION}
            className={`${open === 2 ? '' : 'border-b border-gray-400'}`}
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className={`border-b-0 transition-colors ${
                open === 2
                  ? 'bg-[#aea3c6] text-[#584776] hover:!text-opacity-90 px-8'
                  : 'px-8 rounded-t-lg'
              }`}
            >
              Juego Sin Personalizar
            </AccordionHeader>
            <AccordionBody className="px-10">
              <CartasSinPersonalizar />
            </AccordionBody>
          </Accordion>
        </>
      </div>
    </section>
  )
}

export function CartasPersonalizadas() {
  const [open, setOpen] = useState(0)
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value)

  return (
    <>
      <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="border-b border-gray-400 text-sm lg:text-md"
        >
          ¿Cuáles son los tiempos de producción de juegos personalizados?
        </AccordionHeader>
        <AccordionBody className="text-justify">
          Recomendamos considerar un{' '}
          <b
            style={{
              fontFamily: 'PP Neue Montreal Bold',
            }}
          >
            plazo total de 25 días desde la confirmación del presupuesto hasta
            la entrega final del producto
          </b>
          . Este período abarca desde la reunión inicial entre las marcas, la
          retroalimentación sobre preguntas y diseños, hasta la finalización del
          producto. Es importante tener en cuenta que este tiempo{' '}
          <b
            style={{
              fontFamily: 'PP Neue Montreal Bold',
            }}
          >
            puede variar dependiendo de la disponibilidad de su equipo
          </b>{' '}
          para proporcionar el material necesario. Por nuestra parte,
          garantizamos que una vez que se definan las preguntas y el diseño de
          las cartas, el proceso de producción del juego se completará en un
          plazo de 12 días hábiles.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="border-b border-gray-400 text-sm lg:text-md"
        >
          ¿Cuál es nuestra modalidad de trabajo?
        </AccordionHeader>
        <AccordionBody className="text-justify">
          Te invitamos a que leas la información que te compartimos
          anteriormente y decidas qué juego te interesaría intervenir.
          <br />
          <br />
          Como segundo paso, te enviamos presupuesto relacionado a tu solicitud.
          Luego de ser confirmado, esperamos a que nos envíen las preguntas,
          logos, colores que desean incluir en las cartas personalizadas y en el
          packaging, así podemos comenzar a diseñar los archivos
          correspondientes y enviárselos para su aprobación.
          <br />
          <br />
          Una vez aprobado el diseño final, continuamos con la producción de los
          juegos y finalmente la entrega de los productos.
          <br />
          <br />
          El rasgo distintivo de estas cartas personalizadas es que incluirán el
          tono de en palabras, lo cual les garantizaría, que el encuentro que
          busquen generar, sea reflexivo y profundo.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="border-b border-gray-400 text-sm lg:text-md"
        >
          ¿Cuáles son los métodos de pago?
        </AccordionHeader>
        <AccordionBody className="text-justify">
          Para comenzar el trabajo se requiere contar con el 50% del valor del
          presupuesto. Una vez entregado los productos se abona el otro 50%. En
          el caso de que no trabajen bajo esta modalidad, pueden completar su
          método en el formulario y de nuestra parte evaluamos un incremento en
          el presupuesto.
          <br />
          <br />
          El pago puede realizarse vía transferencia o efectivo (este último, es
          únicamente si eligen retirar por punto de retiro en CABA).
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} animate={CUSTOM_ANIMATION}>
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className="border-b border-gray-400 text-sm lg:text-md"
        >
          ¿Cuáles son los métodos de entrega?
        </AccordionHeader>
        <AccordionBody className="text-justify">
          El costo del envío lo{' '}
          <b
            style={{
              fontFamily: 'PP Neue Montreal Bold',
            }}
          >
            absorbemos{' '}
          </b>
          desde En Palabras{' '}
          <b
            style={{
              fontFamily: 'PP Neue Montreal Bold',
            }}
          >
            cuando el pedido es de más de 50 juegos
          </b>{' '}
          y es en{' '}
          <b
            style={{
              fontFamily: 'PP Neue Montreal Bold',
            }}
          >
            CABA.
          </b>{' '}
          Caso contrario se cotiza y se comparte vía mail el importe.
          <br />
          <br />
          El mismo lo realizamos con{' '}
          <b
            style={{
              fontFamily: 'PP Neue Montreal Bold',
            }}
          >
            Envío Pack o Uber
          </b>{' '}
          dependiendo el traslado a domicilio. También ofrecemos la opción de
          retirar por un punto de retiro en CABA.
          <br />
          <br />
          En el caso de que se realice vía{' '}
          <b
            style={{
              fontFamily: 'PP Neue Montreal Bold',
            }}
          >
            Envío Pack,
          </b>{' '}
          la misma empresa se responsabiliza de enviarte el seguimiento de tu
          pedido por mail. Si no te encontrás en tu domicilio el día de entrega
          se programa una segunda visita. No hace falta presentar DNI para
          recibir el pedido, con la dirección es suficiente.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} animate={CUSTOM_ANIMATION}>
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className="border-b border-gray-400 text-sm lg:text-md"
        >
          ¿Qué tipo de factura generan?
        </AccordionHeader>
        <AccordionBody className="text-justify">
          Factura A si es Responsable Inscripto.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} animate={CUSTOM_ANIMATION}>
        <AccordionHeader
          onClick={() => handleOpen(6)}
          className="border-b border-gray-400 text-sm lg:text-md"
        >
          ¿Qué pasa si deseo cancelar el pedido una vez iniciado el trabajo?
        </AccordionHeader>
        <AccordionBody className="text-justify">
          En caso de que se decida cancelar el pedido una vez iniciado el
          trabajo hay una penalidad mínima del 15% del presupuesto total que
          variará según cuán avanzado esté el proceso.
        </AccordionBody>
      </Accordion>
    </>
  )
}

export function CartasSinPersonalizar() {
  const [open, setOpen] = useState(0)
  const handleOpen = (value: number) => setOpen(open === value ? 0 : value)

  return (
    <>
      <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="border-b border-gray-400 text-sm lg:text-md"
        >
          ¿Cuál es nuestra modalidad de trabajo?
        </AccordionHeader>
        <AccordionBody className="text-justify">
          Te invitamos a que leas la información que te compartimos
          anteriormente y decidas qué juego te interesaría regalar.
          <br />
          <br />
          Como segundo paso, te enviamos presupuesto relacionado a tu solicitud.
          Luego de ser confirmado, realizamos la entrega. Los tiempos de demora
          varían de acuerdo al domicilio, lo cual suelen ser de 5 a 10 días.
          Esta información se detalla una vez que se confirma cantidad de juegos
          y domicilio.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="border-b border-gray-400 text-sm lg:text-md"
        >
          ¿Cuáles son los métodos de pago?
        </AccordionHeader>
        <AccordionBody className="text-justify">
          Para comenzar el trabajo se requiere contar con el 50% del valor del
          presupuesto. Una vez entregado los productos se abona el otro 50%. En
          el caso de que no trabajen bajo esta modalidad, pueden completar su
          método en el formulario y de nuestra parte evaluamos un incremento en
          el presupuesto.
          <br />
          <br />
          El pago puede realizarse vía transferencia o efectivo (este último, es
          únicamente si eligen retirar por punto de retiro en CABA).
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} animate={CUSTOM_ANIMATION}>
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className="border-b border-gray-400 text-sm lg:text-md"
        >
          ¿Cuáles son los métodos de entrega?
        </AccordionHeader>
        <AccordionBody className="text-justify">
          El costo del envío lo{' '}
          <b
            style={{
              fontFamily: 'PP Neue Montreal Bold',
            }}
          >
            absorbemos{' '}
          </b>
          desde En Palabras{' '}
          <b
            style={{
              fontFamily: 'PP Neue Montreal Bold',
            }}
          >
            cuando el pedido es de más de 50 juegos
          </b>{' '}
          y es en{' '}
          <b
            style={{
              fontFamily: 'PP Neue Montreal Bold',
            }}
          >
            CABA.
          </b>{' '}
          Caso contrario se cotiza y se comparte vía mail el importe.
          <br />
          <br />
          El mismo lo realizamos con{' '}
          <b
            style={{
              fontFamily: 'PP Neue Montreal Bold',
            }}
          >
            Envío Pack o Uber
          </b>{' '}
          dependiendo el traslado a domicilio. También ofrecemos la opción de
          retirar por un punto de retiro en CABA.
          <br />
          <br />
          En el caso de que se realice vía{' '}
          <b
            style={{
              fontFamily: 'PP Neue Montreal Bold',
            }}
          >
            Envío Pack,
          </b>{' '}
          la misma empresa se responsabiliza de enviarte el seguimiento de tu
          pedido por mail. Si no te encontrás en tu domicilio el día de entrega
          se programa una segunda visita. No hace falta presentar DNI para
          recibir el pedido, con la dirección es suficiente.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} animate={CUSTOM_ANIMATION}>
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className="border-b border-gray-400 text-sm lg:text-md"
        >
          ¿Qué tipo de factura generan?
        </AccordionHeader>
        <AccordionBody className="text-justify">
          Factura A si es Responsable Inscripto.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 6} animate={CUSTOM_ANIMATION}>
        <AccordionHeader
          onClick={() => handleOpen(6)}
          className="border-b border-gray-400 text-sm lg:text-md"
        >
          ¿Qué pasa si deseo cancelar el pedido una vez iniciado el trabajo?
        </AccordionHeader>
        <AccordionBody className="text-justify">
          En caso de que se decida cancelar el pedido una vez iniciado el
          trabajo hay una penalidad mínima del 15% del presupuesto total que
          variará según cuán avanzado esté el proceso.
        </AccordionBody>
      </Accordion>
    </>
  )
}
