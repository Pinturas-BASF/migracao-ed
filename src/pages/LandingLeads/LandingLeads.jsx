import styles from './landing.css'
import pinturas from '../../assets/banners/Pinturas.svg'
import logo from '../../assets/banners/Logoinvert.svg'
import boulevard from '../../assets/banners/Picture.svg'
import CardsList from '../../components/CardList/CardList'

export default function LandingLeads() {
  return (
    <>
    <section
      className="relative w-full min-h-[420px] md:min-h-[520px] flex flex-col items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${boulevard})` }}
    >

      {/* Logo arriba derecha */}
      <div className='w-full flex justify-end mt-16'>
        <img
          src={logo}
          alt="Logo"
          className="w-44 sm:w-36 md:w-96 h-auto drop-shadow"
        />
      </div>
      {/* Contenido alineado a la izquierda */}
      <div className="relative z-20 w-full pl-32 pr-6 py-40 pt-4 text-white">
        <h1 className="text-4xl md:text-7xl font-black tracking-[0.02em] leading-10 mb-3">
          Tu aliado en <br/>cada formulación
        </h1>
        <p className="mb-6 text-3xl w-3/12">
          Recibí asesoría técnica y precios exclusivos para fabricantes registrados.
        </p>
<button className="
  bg-[#249FD2] text-white font-bold
  text-[clamp(1rem,2vw,1.5rem)]
  px-[clamp(1rem,3vw,2rem)]
  py-[clamp(0.5rem,1.5vw,1rem)]
  w-[clamp(200px,40vw,600px)]
  shadow
">
  Quiero registrarme y acceder a los beneficios
</button>


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
      <div className="text-center mt-10">
        <button className="bg-[#014B96] text-white font-semibold px-6 py-3 shadow">Registrarme como cliente</button>
      </div>
    </div>
  </section>

<section className="bg-[#F0F0F0] py-12 px-6 text-center w-full">
  <p className="mx-auto font-medium text-[#014B96] text-2xl w-[37.333%]">
    <strong>Al registrarte en nuestra plataforma, accedés a una experiencia exclusiva para fabricantes industriales. </strong>Comprás con el respaldo de la industria química más reconocida a nivel global, con atención personalizada, soporte técnico de primer nivel y condiciones preferenciales pensadas para potenciar tu competitividad.
  </p>
</section>

<section className="max-w-[90rem] mx-auto px-6 py-16 flex flex-col md:flex-row items-stretch">
  <img src={pinturas} alt="Pinturas" className="shadow-md h-full object-cover flex-1" />
  <div className="backgroundblue w-full p-11 flex flex-col justify-center flex-1 pr-36">
    <h3 className="text-3xl font-black text-white mb-4">Creadores de logros</h3>
    <p className="text-white text-xl">
      Fabricantes de toda la región ya optimizan sus procesos con BASF.{" "}
      <strong>
        Nuestro compromiso es acompañarte con innovación, seguridad y soluciones
        reales para que tu negocio crezca con base sólida.
      </strong>
    </p>
  </div>
</section>


<section className="bg-white py-16 text-center flex flex-col items-center justify-center">
  <div className='px-6 max-w-full'>
    <h2 className="text-4xl font-black mb-4 text-[#014B96]">
      ¿Listo para dar el próximo paso?
    </h2>
    <p className="max-w-5xl mx-auto mb-6 text-gray-700 text-2xl">
      <strong>Completá el formulario y accedé a condiciones exclusivas para fabricantes industriales.{" "}</strong>Nuestro equipo se pondrá en contacto para ayudarte a aprovechar al máximo la plataforma.
    </p>
    <button className="bg-[#014B96] text-white font-semibold px-6 py-3 shadow">Quiero registrarme</button>
  </div>
</section>

<footer className="backgroundblue text-white py-6 text-sm">
  <div className="max-w-7xl text-lg mx-auto flex flex-col md:flex-row justify-between items-center px-6">
    <p>Copyright © BASF SA 2025</p>
    <a href="#" className="underline hover:text-gray-200">Política de Privacidad</a>
  </div>
</footer>

    </>
  )
}