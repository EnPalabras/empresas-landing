export default function FAQ() {
  return (
    <div
      id="accordion-flush"
      data-accordion="collapse"
      data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
      data-inactive-classes="text-gray-500 dark:text-gray-400"
      className="w-full max-w-4xl mx-auto mb-10 px-10"
    >
      <div className="flex flex-col gap-8 my-10">
        <h1 className="font-bold text-5xl select-text ">
          Preguntas Frecuentes
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Se ofrece aquí respuesta a una selección de las preguntas más
          frecuentes planteadas por los usuarios que han pasado por
          @EnPalabrass.
        </p>
      </div>
      <h2 id="accordion-flush-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
          data-accordion-target="#accordion-flush-body-1"
          aria-expanded="true"
          aria-controls="accordion-flush-body-1"
        >
          <span>¿Cuál es nuestra modalidad de trabajo?</span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-flush-body-1"
        className="hidden"
        aria-labelledby="accordion-flush-heading-1"
      >
        <div className="py-5 border-b border-gray-200 dark:border-gray-700 text-justify">
          <p className="mb-4 text-gray-500 dark:text-gray-400">
            Te invitamos a que leas la información que te compartimos
            anteriormente y decidas qué juego te interesaría intervenir.
          </p>
          <p className="mb-4 text-gray-500 dark:text-gray-400">
            Como segundo paso, te enviamos presupuesto relacionado a tu
            solicitud. Luego de ser confirmado, esperamos a que nos envíen las
            preguntas, logos, colores que desean incluir en las cartas
            personalizadas y en el packaging, así podemos comenzar a diseñar los
            archivos correspondientes y enviárselos para su aprobación.
          </p>
          <p className="mb-4 text-gray-500 dark:text-gray-400">
            Una vez aprobado el diseño final, continuamos con la producción de
            los juegos y finalmente la entrega de los productos.
          </p>
          <p className="mb-4 text-gray-500 dark:text-gray-400">
            El rasgo distintivo de estas cartas personalizadas es que incluirán
            el tono de en palabras, lo cual les garantizaría, que el encuentro
            que busquen generar, sea reflexivo y profundo.
          </p>
        </div>
      </div>
      <h2 id="accordion-flush-heading-2">
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
          data-accordion-target="#accordion-flush-body-2"
          aria-expanded="false"
          aria-controls="accordion-flush-body-2"
        >
          <span>¿Cuáles son los métodos de pago?</span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-flush-body-2"
        className="hidden"
        aria-labelledby="accordion-flush-heading-2"
      >
        <div className="py-5 border-b border-gray-200 dark:border-gray-700 text-justify">
          <p className="mb-4 text-gray-500 dark:text-gray-400">
            Para comenzar el trabajo se requiere contar con el 50% del valor del
            presupuesto. Una vez entregado los productos se abona el otro 50%.
            En el caso de que no trabajen bajo esta modalidad, pueden completar
            su método en el formulario y de nuestra parte evaluamos un
            incremento en el presupuesto.
          </p>
          <p className="mb-4 text-gray-500 dark:text-gray-400">
            El pago puede realizarse vía transferencia o efectivo (este último,
            es únicamente si eligen retirar por punto de retiro en CABA).
          </p>

          <p className="mb-4 text-gray-500 dark:text-gray-400">
            Factura A si es Responsable Inscripto.
          </p>
        </div>
      </div>
      <h2 id="accordion-flush-heading-3">
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
          data-accordion-target="#accordion-flush-body-3"
          aria-expanded="false"
          aria-controls="accordion-flush-body-3"
        >
          <span>¿Cuáles son los métodos de entrega?</span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id="accordion-flush-body-3"
        className="hidden"
        aria-labelledby="accordion-flush-heading-3"
      >
        <div className="py-5 border-b border-gray-200 dark:border-gray-700 text-justify">
          <p className="mb-4 text-gray-500 dark:text-gray-400">
            El costo del envío <b>está bonificado </b>cuando el pedido es de más
            de 50 juegos y es en CABA. Caso contrario se cotiza y se comparte
            vía mail el importe.
          </p>
          <p className="mb-4 text-gray-500 dark:text-gray-400">
            El mismo lo realizamos por{' '}
            <b>Envío Pack, Uber, o un servicio de entregas propio</b>{' '}
            dependiendo el traslado a domicilio. También ofrecemos la opción de
            retirar por un punto de retiro en CABA.
          </p>
          <p className="mb-4 text-gray-500 dark:text-gray-400">
            En el caso de que se realice vía <b>Envío Pack</b>, la misma empresa
            se responsabiliza de enviarte el seguimiento de tu pedido por mail.
            Si no te encontrás en tu domicilio el día de entrega se programa una
            segunda visita. No hace falta presentar DNI para recibir el pedido,
            con la dirección es suficiente.
          </p>
        </div>
      </div>
    </div>
  )
}

// export default function FAQ() {
//   return (
//     <div
//       id="accordion-color"
//       data-accordion="collapse"
//       data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white"
//       className="w-full max-w-3xl mx-auto mb-10"
//     >
//       <div className="flex flex-col gap-8 my-10">
//         <h1 className="font-bold text-3xl select-text ">
//           Preguntas Frecuentes
//         </h1>
//         <p className=" text-gray-500 dark:text-gray-400">
//           Se ofrece aquí respuesta a una selección de las preguntas más
//           frecuentes planteadas por los usuarios que han pasado por
//           @EnPalabrass.
//         </p>
//       </div>
//       <h2 id="accordion-color-heading-1">
//         <button
//           type="button"
//           className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
//           data-accordion-target="#accordion-color-body-1"
//           aria-expanded="true"
//           aria-controls="accordion-color-body-1"
//         >
//           <span>What is Flowbite?</span>
//           <svg
//             data-accordion-icon
//             className="w-3 h-3 rotate-180 shrink-0"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 10 6"
//           >
//             <path
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="M9 5 5 1 1 5"
//             />
//           </svg>
//         </button>
//       </h2>
//       <div
//         id="accordion-color-body-1"
//         className="hidden"
//         aria-labelledby="accordion-color-heading-1"
//       >
//         <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
//           <p className="mb-2 text-gray-500 dark:text-gray-400">
//             Flowbite is an open-source library of interactive components built
//             on top of Tailwind CSS including buttons, dropdowns, modals,
//             navbars, and more.
//           </p>
//           <p className="text-gray-500 dark:text-gray-400">
//             Check out this guide to learn how to{' '}
//             <a
//               href="/docs/getting-started/introduction/"
//               className="text-blue-600 dark:text-blue-500 hover:underline"
//             >
//               get started
//             </a>{' '}
//             and start developing websites even faster with components on top of
//             Tailwind CSS.
//           </p>
//         </div>
//       </div>
//       <h2 id="accordion-color-heading-2">
//         <button
//           type="button"
//           className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
//           data-accordion-target="#accordion-color-body-2"
//           aria-expanded="false"
//           aria-controls="accordion-color-body-2"
//         >
//           <span>Is there a Figma file available?</span>
//           <svg
//             data-accordion-icon
//             className="w-3 h-3 rotate-180 shrink-0"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 10 6"
//           >
//             <path
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="M9 5 5 1 1 5"
//             />
//           </svg>
//         </button>
//       </h2>
//       <div
//         id="accordion-color-body-2"
//         className="hidden"
//         aria-labelledby="accordion-color-heading-2"
//       >
//         <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
//           <p className="mb-2 text-gray-500 dark:text-gray-400">
//             Flowbite is first conceptualized and designed using the Figma
//             software so everything you see in the library has a design
//             equivalent in our Figma file.
//           </p>
//           <p className="text-gray-500 dark:text-gray-400">
//             Check out the{' '}
//             <a
//               href="https://flowbite.com/figma/"
//               className="text-blue-600 dark:text-blue-500 hover:underline"
//             >
//               Figma design system
//             </a>{' '}
//             based on the utility classes from Tailwind CSS and components from
//             Flowbite.
//           </p>
//         </div>
//       </div>
//       <h2 id="accordion-color-heading-3">
//         <button
//           type="button"
//           className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
//           data-accordion-target="#accordion-color-body-3"
//           aria-expanded="false"
//           aria-controls="accordion-color-body-3"
//         >
//           <span>
//             What are the differences between Flowbite and Tailwind UI?
//           </span>
//           <svg
//             data-accordion-icon
//             className="w-3 h-3 rotate-180 shrink-0"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 10 6"
//           >
//             <path
//               stroke="currentColor"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               stroke-width="2"
//               d="M9 5 5 1 1 5"
//             />
//           </svg>
//         </button>
//       </h2>
//       <div
//         id="accordion-color-body-3"
//         className="hidden"
//         aria-labelledby="accordion-color-heading-3"
//       >
//         <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
//           <p className="mb-2 text-gray-500 dark:text-gray-400">
//             The main difference is that the core components from Flowbite are
//             open source under the MIT license, whereas Tailwind UI is a paid
//             product. Another difference is that Flowbite relies on smaller and
//             standalone components, whereas Tailwind UI offers sections of pages.
//           </p>
//           <p className="mb-2 text-gray-500 dark:text-gray-400">
//             However, we actually recommend using both Flowbite, Flowbite Pro,
//             and even Tailwind UI as there is no technical reason stopping you
//             from using the best of two worlds.
//           </p>
//           <p className="mb-2 text-gray-500 dark:text-gray-400">
//             Learn more about these technologies:
//           </p>
//           <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
//             <li>
//               <a
//                 href="https://flowbite.com/pro/"
//                 className="text-blue-600 dark:text-blue-500 hover:underline"
//               >
//                 Flowbite Pro
//               </a>
//             </li>
//             <li>
//               <a
//                 href="https://tailwindui.com/"
//                 rel="nofollow"
//                 className="text-blue-600 dark:text-blue-500 hover:underline"
//               >
//                 Tailwind UI
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   )
// }
