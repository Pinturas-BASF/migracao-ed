import styles from './landing.css'
import pinturas from '../../assets/banners/Pinturas.svg'
import pinturasMobile from '../../assets/banners/pinturasMobile.svg'
import logoDesktop from '../../assets/banners/Logoinvert.svg'
import logoMobile from '../../assets/banners/logoMobile.svg'
import banner from '../../assets/banners/BannerLanding.svg'
import bannerMobile from '../../assets/banners/BannerLandingMobile.svg'
import CardsList from '../../components/CardList/CardList'

export default function LandingLeads() {
  return (
    <>
    <section
      className="relative w-full min-h-[420px] md:min-h-[520px] flex items-center"
    >
      <picture className="absolute inset-0 h-full w-full">
        <source srcSet={banner} media="(min-width: 640px)" />
        <img
          src={bannerMobile}
          alt="Banner"
          className="h-full w-full object-cover"
        />
      </picture>


    <picture className="absolute top-6 right-0 drop-shadow">
      <source media="(max-width: 767px)" srcSet={logoMobile} />
      <img
        src={logoDesktop}
        alt="Logo"
        loading="lazy"
        className="w-44 sm:w-36 md:w-auto h-auto"
      />
    </picture>

      <div className="absolute z-20
        w-full
        sm:w-[100%]
        md:w-[50%]
        xl:w-[45%]
        flex flex-col text-white
        items-center
        h-full justify-end
        xl:justify-center
        ">

        <div className='
        text-center
        xl:!text-start
        mb-4'>
        <h1 className="
          text-4xl
          md:text-7xl
          mb-2
          xl:mb-3 
          font-black tracking-[0.02em] leading-10">
          Tu aliado en <span className="block">cada formulación</span>
        </h1>
        <p className="
        mb-2
        xl:mb-6
        text-[clamp(1.125rem,1.5vw,1.875rem)]
        ">
          Recibí asesoría técnica y precios exclusivos <span className="block">para fabricantes registrados.</span>
        </p>

        <button
          className="
            bg-[#249FD2] text-white font-bold shadow
            text-[clamp(1rem,2vw,1.25rem)] 
            px-[clamp(1rem,1.5vw,1.5rem)]
            py-[clamp(0.50rem,1vw,0.75rem)]
            w-[100%]

            md:text-[clamp(1rem,1.5vw,1.375rem)] 
            md:w-[clamp(220px,30vw,350px)]
            
            xl:text-[1.125rem] 
            xl:w-[clamp(250px,25vw,500px)]
          "
        >
          Quiero registrarme y acceder a los beneficios
        </button>
      </div>

      </div>
    </section>

  <section className="bg-white py-16">
    <div className="max-w-7xl mx-auto px-6 text-[#014B96]">
      <h2 className="text-center text-4xl font-extrabold mb-12">
        Lo que solo BASF puede ofrecerte
      </h2>
      <div>
        <CardsList />
      </div>
      <div className="text-center mt-10 pl-2">
        <button className="bg-[#014B96] text-white font-semibold py-3 px-8 shadow">Registrarme como cliente</button>
      </div>
    </div>
  </section>

<section className="bg-[#F0F0F0] py-12 px-6 text-center w-full">
  <p className="mx-auto font-medium text-[#014B96] text-xl md:text-2xl max-w-3xl">
    <strong>Al registrarte en nuestra plataforma, accedés a una experiencia exclusiva para fabricantes industriales. </strong>Comprás con el respaldo de la industria química más reconocida a nivel global, con atención personalizada, soporte técnico de primer nivel y condiciones preferenciales pensadas para potenciar tu competitividad.
  </p>
</section>

 <section className="max-w-[90rem] mx-auto px-4 sm:px-6 py-10 md:py-16">
      <div className="flex flex-col md:flex-row items-stretch overflow-hidden shadow-md">
        <picture className="w-full md:w-1/2">
          <source media="(max-width: 767px)" srcSet={pinturasMobile} />
          <img
            src={pinturas}
            alt="Pinturas"
            loading="lazy"
            className="w-full object-cover aspect-[4/3] md:aspect-auto"
          />
        </picture>

        <div className="bg-[#014B96] w-full md:w-1/2 px-6 py-8 sm:px-8 sm:py-10 md:p-11 md:pr-36 flex flex-col justify-center text-center md:!text-left">
          <h3 className="text-3xl sm:text-3xl font-black text-white mb-3 sm:mb-4">
            Creadores de logros
          </h3>
          <p className="text-white text-xl px-3">
            Fabricantes de toda la región ya optimizan sus procesos con BASF.{" "}
            <strong>
              Nuestro compromiso es acompañarte con innovación, seguridad y
              soluciones reales para que tu negocio crezca con base sólida.
            </strong>
          </p>
        </div>
      </div>
    </section>


<section className="bg-white py-16 text-center flex flex-col items-center justify-center">
  <div className='px-6 max-w-full'>
    <h2 className="text-4xl font-black mb-4 text-[#014B96]">
      ¿Listo para dar el próximo paso?
    </h2>
    <p className="max-w-5xl mx-auto mb-6 text-gray-700 text-xl">
      <strong>Completá el formulario y accedé a condiciones exclusivas para fabricantes industriales.{" "}</strong>Nuestro equipo se pondrá en contacto para ayudarte a aprovechar al máximo la plataforma.
    </p>
    <button className="bg-[#014B96] text-white font-semibold w-3/4 md:w-1/4 px-6 py-3 shadow text-xl md:text-base">Quiero registrarme</button>
  </div>
</section>

<footer className="bg-[#014B96] text-white py-6 text-sm">
  <div className="max-w-7xl text-xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
    <p>Copyright © BASF SA 2025</p>
    <a href="#" className="hover:text-gray-200">Política de Privacidad</a>
  </div>
</footer>

    </>
  )
}