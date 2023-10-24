export default function Proceso() {
  return (
    <section className="max-w-6xl mx-auto my-10 px-2 md:px-4" id="proceso">
      <h4
        className="text-3xl text-gray-800 lg:text-7xl mb-8 text-center"
        style={{
          fontFamily: 'PP Neue Montreal Medium',
          lineHeight: '1.2',
        }}
      >
        Conocé nuestro{' '}
        <span
          className="text-[#584776]"
          style={{
            fontFamily: 'PP Neue Montreal Bold',
          }}
        >
          proceso creativo
        </span>{' '}
        de cartas personalizadas
      </h4>
      <div className="flex flex-col gap-4 justify-between items-center max-w-6xl mx-auto text-justify">
        <div
          className="px-4 lg:px-8
        bg-gray-50  bg-opacity-30
        rounded-lg py-8 w-full
        "
        >
          <div className="flex flex-col gap-4 justify-between">
            <div>
              <span>1.</span> Completá <span>este formulario</span> para que
              podamos conocer tu necesidad.
            </div>
            <div>
              <span>2.</span> <span>Enviamos la propuesta</span> y presupuesto
              personalizado a tu mail.
            </div>
            <div>
              <span>3.</span> Si estás de acuerdo con la propuesta y no hay
              dudas, procedés a <span>realizar el pago del 50%</span> del monto
              total y comenzamos el camino creativo.
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-between gap-6 ">
          <div
            className="px-4 lg:px-8
        bg-gray-50  bg-opacity-30
        rounded-lg w-full lg:w-3/5  py-8 w-full
        "
          >
            <div className="flex flex-col gap-4 justify-between ">
              <h5 className="text-[#584776] text-xl italic">
                En el caso de <span>querer sumar </span> cartas + packaging
                personalizado:
              </h5>
              <div>
                <span className="text-[#584776]">4.</span> Compartís logo, color
                de identidad corpotativa y preguntas relacionadas a tu campaña.
              </div>
              <div>
                <span className="text-[#584776]">5.</span> Nuestro{' '}
                <span>equipo diseña y adapta las preguntas</span> a un tono
                amigable y profundo.
              </div>
              <div>
                <span className="text-[#584776]">6.</span>
                <span> Reunión de feedback </span>
                de ambos equipos para validar las preguntas y diseños de cartas.
              </div>
              <div>
                <span className="text-[#584776]">7.</span> Una vez aprobado,{' '}
                <span>enviamos los diseños a la imprenta.</span> La producción{' '}
                <span>demora 12 días.</span> Al finalizar se envía el pedido al
                domicilio compartido (la entrega depende de la distancia){' '}
              </div>
            </div>
          </div>
          <div
            className="px-4 lg:px-8
        bg-gray-50  bg-opacity-30
        rounded-lg w-full lg:w-2/5 py-8 w-full
        "
          >
            <div className="flex flex-col gap-4 justify-between">
              <h5 className="text-[#584776] text-xl italic">
                En caso de <span>no querer </span>cartas o packaging
                personalizado:
              </h5>
              <div>
                <span className="text-[#584776]">4.</span>{' '}
                <span>Enviamos los juegos</span> apenas realices el{' '}
                <span>pago del 50%</span> del monto total.
              </div>
              <div>
                <span className="text-[#584776]">5.</span> Una vez recibido el
                pedido deberás completar el pago del <span>50% restante</span>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
