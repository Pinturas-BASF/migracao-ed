import { useNavigate } from 'react-router-dom'


export default function LeadGraciasMessage() {
    const navigate = useNavigate();

    const goToWeb = () => {
    navigate('/#');
    }
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-100 p-4 min-h-fit">
        <div className="max-w-md w-full text-center">
          <p className="text-xl md:text-3xl text-[#014B96] leading-tight">
            Inscripción en curso
          </p>
        </div>

        <div className="max-w-full w-full text-center mt-2">
          <p className="text-2xl sm:text-3xl md:text-5xl text-[#014B96] font-black leading-tight">
            ¡Gracias por registrarse en nuestra plataforma!
          </p>
        </div>

        <div className="max-w-3xl w-full text-center mt-4 space-y-2">
          <p className="text-md md:text-lg text-black">
            Nuestro equipo de ventas recibió tu información y va a contactarse pronto.
          </p>
          <p className="text-sm md:text-lg text-black mt-0">
            Recibirás una notificación por correo electrónico cuando tu cuenta se encuentre activa.
          </p>
          <p className="text-sm md:text-lg text-black mt-4">
            En caso de dudas, puede contactar a nuestro equipo de ventas.
          </p>
        </div>

        <div className="max-w-md w-full text-center mt-6">
          <a
            className="border-b-2 border-[#014B96] text-base md:text-lg text-[#014B96] font-bold"
            href="https://wa.link/pgn8q8"
          >
            Contactarse
          </a>
        </div>

        <div className='w-full flex justify-center'>
          <button
            onClick={goToWeb}
            className="mt-6 bg-[#014B96] w-[80%] sm:w-[50%] md:w-[30%] lg:w-[15%] text-white font-bold px-3 py-2 md:px-4 md:py-2"
          >
            Ir al sitio web
          </button>
        </div>
      </div>
    </>
  )
}
