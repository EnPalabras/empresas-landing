// import { appendData } from '../services/google.js'
import { useState } from 'react'
import { Radio, Spinner } from '@material-tailwind/react'

async function postFormData(values: any) {
  const response = await fetch(
    'https://ruleta-empresa.vercel.app/api/landing',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }
  )
  return response.json()
}

export default function Form() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    CUIT: '',
    retention: false,
    motive: '',
    links: '',
    comments: '',
    phone: '',
    address: '',
    juego: '',
    paymentInfo: '',
    paymentComments: '',
  })

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const submitForm = async (e: any) => {
    e.preventDefault()

    setLoading(true)
    try {
      const values = [
        [
          form.name,
          form.email,
          form.CUIT,
          form.retention,
          form.motive,
          form.links,
          form.comments,
          form.phone,
          form.address,
          form.juego,
          form.paymentInfo,
          form.paymentComments,
        ],
      ]

      console.log(values)
      // const response = await appendData(values)
      const response = await postFormData(values)

      console.log(response)
    } catch (error) {
      console.log(error)
    } finally {
      setTimeout(() => {
        setLoading(false)
        setSubmitted(true)
      }, 1000)
    }
  }

  return (
    <section
      className="
    bg-[#c2bad8] bg-opacity-70 py-10 pb-16"
      id="formulario"
    >
      <div className="max-w-8xl mx-auto px-4 w-full ">
        {' '}
        <h4
          className="text-3xl text-center my-10 text-gray-800 lg:text-7xl"
          style={{
            fontFamily: 'PP Neue Montreal Bold',
            lineHeight: '1.2',
          }}
        >
          Formulario para
          <span
            className="text-[#584776]"
            style={{
              fontFamily: 'PP Neue Montreal Bold',
            }}
          >
            {' '}
            cotizar
            <br />
          </span>
        </h4>
        <form
          onSubmit={submitForm}
          onChange={(e) => {
            const target = e.target as HTMLInputElement
            setForm({ ...form, [target.name]: target.value })
          }}
          className="max-w-6xl lg:px-4 mx-auto flex flex-col w-full gap-2"
        >
          {/* {JSON.stringify(form)} */}
          <div className="flex flex-row gap-2 w-full justify-between">
            <div className="flex flex-col gap-2 w-full">
              <label className="text-gray-800 text-sm font-bold" htmlFor="name">
                Nombre
              </label>
              <input
                name="name"
                type="text"
                placeholder="Nombre de la empresa"
                className="w-full mb-2 bg-gray-50 bg-opacity-[10%] rounded-lg focus:ring-2 focus:ring-[#584776] focus:border-transparent"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label
                className="text-gray-800 text-sm font-bold"
                htmlFor="email"
              >
                Email
              </label>
              <input
                name="email"
                type="text"
                placeholder="Email"
                className="w-full mb-2 bg-gray-50 bg-opacity-[10%] rounded-lg focus:ring-2 focus:ring-[#584776] focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex flex-row gap-2 w-full justify-between">
            <div className="flex flex-col gap-2 w-full">
              <label
                className="text-gray-800 text-sm font-bold"
                htmlFor="phone"
              >
                Teléfono / Celular
              </label>
              <input
                name="phone"
                type="text"
                placeholder="Número de contacto"
                className="w-full mb-2 bg-gray-50 bg-opacity-[10%] rounded-lg focus:ring-2 focus:ring-[#584776] focus:border-transparent"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="text-gray-800 text-sm font-bold" htmlFor="CUIT">
                CUIT
              </label>
              <input
                name="CUIT"
                type="text"
                placeholder="CUIT"
                className="w-full mb-2 bg-gray-50 bg-opacity-[10%] rounded-lg
              focus:ring-2 focus:ring-[#584776] focus:border-transparent
              "
              />
            </div>
          </div>
          <div className="flex flex-row gap-2 w-full justify-between">
            <div className="flex flex-col justify-between gap-2 w-full items-center">
              <label
                className="text-gray-800 text-sm font-bold text-lg"
                htmlFor="retention"
              >
                Agente de Retención
              </label>
              <div className="flex gap-10">
                <Radio
                  name="retention"
                  label="Sí"
                  crossOrigin="true"
                  className="focus:ring-2 focus:ring-[#584776] focus:border-transparent"
                />
                <Radio
                  name="retention"
                  label="No"
                  defaultChecked
                  crossOrigin="true"
                  className="focus:ring-2 focus:ring-[#584776] focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label
                className="text-gray-800 text-sm font-bold"
                htmlFor="address"
              >
                Dirección
              </label>
              <input
                name="address"
                type="text"
                placeholder="Dirección o Zona de Entrega"
                className="w-full mb-2 bg-gray-50 bg-opacity-[10%] rounded-lg focus:ring-2 focus:ring-[#584776] focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 w-full justify-between">
            <div className="flex flex-col gap-2 w-full">
              <label
                className="text-gray-800 text-sm font-bold"
                htmlFor="motive"
              >
                Motivo de Uso
              </label>
              <input
                name="motive"
                type="text"
                placeholder="Motivo de Uso"
                className="w-full mb-2 bg-gray-50 bg-opacity-[10%] rounded-lg focus:ring-2 focus:ring-[#584776] focus:border-transparent"
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label
                className="text-gray-800 text-sm font-bold"
                htmlFor="links"
              >
                Links o Redes
              </label>
              <input
                name="links"
                type="text"
                placeholder="Web o Links (redes)"
                className="w-full mb-2 bg-gray-50 bg-opacity-[10%] rounded-lg focus:ring-2 focus:ring-[#584776] focus:border-transparent"
              />
            </div>
          </div>
          <label className="text-gray-800 text-sm font-bold" htmlFor="juego">
            Juego/s y Cantidades{' '}
            <span className="text-xs font-normal">
              (Mencionar si se quiere personalizar)
            </span>
          </label>
          <input
            name="juego"
            type="text"
            placeholder="Juego/s y Cantidades"
            className="w-full mb-2 bg-gray-50 bg-opacity-[10%] rounded-lg focus:ring-2 focus:ring-[#584776] focus:border-transparent"
          />
          <label className="text-gray-800 text-sm font-bold" htmlFor="comments">
            Comentarios
          </label>
          <textarea
            name="comments"
            //   type="text"
            placeholder="Otros Comentarios acerca de tu pedido"
            className="w-full mb-2 bg-gray-50 bg-opacity-[10%] rounded-lg focus:ring-2 focus:ring-[#584776] focus:border-transparent
            h-24
          "
          />{' '}
          <div className="w-full justify-center my-2 flex flex-col items-center">
            <p className="text-gray-800 text-lg text-center">
              Nuestra política de pagos es bajo la condición de 50% de anticipo
              y 50% a contraentrega.
            </p>
            <div className="flex gap-10">
              <Radio
                name="paymentInfo"
                label="Ok"
                crossOrigin="true"
                defaultChecked
              />
              <Radio
                name="paymentInfo"
                label="Requiere otra Modalidad"
                crossOrigin="true"
              />
            </div>
          </div>
          <label
            className="text-gray-800 text-sm font-bold"
            htmlFor="paymentComments"
          >
            Comentarios
          </label>
          <textarea
            name="paymentComments"
            //   type="text"
            placeholder="Comentarios sobre Modalidad de Pago"
            className="w-full mb-2 bg-gray-50 bg-opacity-[10%] rounded-lg
            h-24
          "
          />{' '}
          {submitted ? (
            <p className="text-center text-[#584776]">
              Formulario enviado con éxito!
            </p>
          ) : (
            <button className="bg-[#584776] text-white rounded-lg px-4 py-2 ">
              {!loading ? (
                <p>Enviar</p>
              ) : (
                <div className="flex gap-2 justify-center w-full">
                  <Spinner />
                </div>
              )}
            </button>
          )}
        </form>
        {/* <button onClick={submitForm}>Holaaaa</button> */}
      </div>
    </section>
  )
}
