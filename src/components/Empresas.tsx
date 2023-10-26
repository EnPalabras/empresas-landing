import {
  AdidasLogo,
  GoogleLogo,
  MicrosoftLogo,
  NespressoLogo,
  TiendaNubeLogo,
  //   TiendaNubeLogo,
  WarnerBros,
} from '../assets/logos/company/CompanyLogos'

export default function Empresas() {
  return (
    <section className="max-w-8xl my-10 mx-auto lg:px-4" id="testimonios">
      <h4
        className="text-2xl text-center text-gray-800 lg:text-7xl"
        style={{
          fontFamily: 'PP Neue Montreal Medium',
          lineHeight: '1.2',
        }}
      >
        Empresas que{' '}
        <span
          className="text-[#584776]"
          style={{
            fontFamily: 'PP Neue Montreal Bold',
          }}
        >
          confiaron
        </span>{' '}
        en <br className="lg:hidden" />
        En Palabras
      </h4>
      {/* <div
        className="w-full inline-flex flex-nowrap overflow-hidden 
        [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        x-data="{}"
        x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
      >
        <ul
          x-ref="logos"
          id="logos"
          className="flex items-center justify-center md:justify-start [&_svg]:max-w-none animate-infinite-scroll"
        >
          <li className="w-[120px] lg:w-[200px] mx-2 lg:mx-8">
            <NespressoLogo />
          </li>
          <li className="w-[120px] lg:w-[200px] mx-2 lg:mx-8">
            <MicrosoftLogo />
          </li>
          <li className="w-[120px] lg:w-[200px] mx-2 lg:mx-8">
            <GoogleLogo />
          </li>
          <li className="w-[120px] lg:w-[200px] mx-2 lg:mx-8">
            <AdidasLogo />
          </li>
          <li className="w-[120px] lg:w-[200px] mx-2 lg:mx-8">
            <WarnerBros />
          </li>
        </ul>
      </div> */}
      {/* <div className="flex flex-row justify-around items-center mt-10">
        <div className="w-[120px] lg:w-[200px] mx-2 lg:mx-8">
          <NespressoLogo />
        </div>
        <div className="w-[120px] lg:w-[200px] mx-2 lg:mx-8">
          <MicrosoftLogo />
        </div>
        <div className="w-[120px] lg:w-[200px] mx-2 lg:mx-8">
          <GoogleLogo />
        </div>
        <div className="w-[120px] lg:w-[200px] mx-2 lg:mx-8">
          <AdidasLogo />
        </div>
        <div className="w-[120px] lg:w-[200px] mx-2 lg:mx-8">
          <WarnerBros />
        </div>
      </div> */}

      <div className="grid grid-cols-2 lg:grid-cols-3 place-content-center place-items-center">
        <div className="w-[120px] lg:w-[200px] mx-2 lg:mx-auto">
          <TiendaNubeLogo />
        </div>
        <div className="w-[120px] lg:w-[200px] mx-2 lg:mx-auto">
          <NespressoLogo />
        </div>
        <div className="w-[120px] lg:w-[200px] mx-2 lg:mx-auto">
          <MicrosoftLogo />
        </div>
        <div className="w-[120px] lg:w-[200px] mx-2 lg:mx-auto">
          <GoogleLogo />
        </div>
        <div className="w-[120px] lg:w-[200px] mx-2 lg:mx-auto">
          <AdidasLogo />
        </div>
        <div className="w-[120px] lg:w-[200px] mx-2 lg:mx-auto">
          <WarnerBros />
        </div>
      </div>
    </section>
  )
}
