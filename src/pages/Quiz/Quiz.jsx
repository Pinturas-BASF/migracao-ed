import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoHeader from '../../assets/logo/basfLogo.svg';

const QUESTIONS = [
  {
    id: 'q1',
    text: '¿Qué tipo de actividad desarrollás?',
    subtitle: 'Respondé tocando la opción correspondiente para recibir atención prioritaria',
    options: [
      { id: 'a', label: 'Ya fabrico pinturas o recubrimientos' },
      { id: 'b', label: 'Revendo pinturas' },
      { id: 'c', label: 'Quiero empezar a fabricar' },
      { id: 'd', label: 'Fabrico otras cosas relacionadas' },
    ],
  },
  {
    id: 'q2',
    text: '¿Qué tipo de pinturas fabricás?',
    subtitle: 'Respondé tocando la opción correspondiente para recibir atención prioritaria',
    options: [
      { id: 'a', label: 'Pinturas industriales' },
      { id: 'b', label: 'Pinturas decorativas' },
      { id: 'c', label: 'Otros revestimientos o masillas' },
    ],
  },
  {
    id: 'q3',
    text: '¿Qué cantidad de producto fabricás al mes?',
    subtitle: 'Respondé tocando la opción correspondiente para recibir atención prioritaria',
    options: [
      { id: 'a', label: 'Hasta 10.000 litros' },
      { id: 'b', label: 'Entre 10.000 y 35.000 litros' },
      { id: 'c', label: 'Entre 35.000 y 50.000 litros' },
      { id: 'd', label: 'Más de 50.000 litros' },
    ],
  },
];

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.12 1.523 5.855L.057 23.885a.5.5 0 00.613.613l6.03-1.466A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.003-1.368l-.359-.214-3.718.904.921-3.619-.234-.372A9.808 9.808 0 012.182 12c0-5.418 4.4-9.818 9.818-9.818 5.418 0 9.818 4.4 9.818 9.818 0 5.418-4.4 9.818-9.818 9.818z" />
    </svg>
  );
}

function ThankYouScreen() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="py-8">
        <div className="flex items-center justify-center px-6">
          <img src={logoHeader} alt="Logo de BASF" fetchpriority="high" className="bg-[#014B96] h-16" />
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-10">
        <div className="w-full max-w-sm text-center flex flex-col gap-3">
          <h2 className="text-3xl font-black text-[#014B96] leading-snug">
            ¡Gracias por responder!
          </h2>
          <p className="text-gray-600 text-md leading-relaxed">
            Nuestro equipo comercial ya tiene tu contacto y se va a comunicar a la brevedad.
          </p>
          <p className="text-gray-600 text-md leading-relaxed">
            ¿Tenés urgencia? Enviale un mensaje directo por WhatsApp a nuestro vendedor Juan Manuel
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=541135036369"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-[#014B96] text-white font-bold py-4 text-base mt-2"
          >
            <WhatsAppIcon />
            Enviar WhatsApp
          </a>
        </div>
      </main>

      <footer className="bg-[#014B96] py-5 text-center">
        <p className="text-white text-sm mb-1">Copyright © BASF SA 2025</p>
        <a
          href="/politica-privacidad"
          className="text-white text-sm underline"
        >
          Política de Privacidad
        </a>
      </footer>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 12 10" fill="none" className="w-3 h-3">
      <path d="M1 5l3.5 3.5L11 1" stroke="#014b96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DiscardScreen({ onBack }) {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="py-8">
        <div className="flex items-center justify-center px-6">
          <img src={logoHeader} alt="Logo de BASF" fetchpriority="high" className="bg-[#014B96] h-16" />
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-10">
        <div className="w-full max-w-sm text-center flex flex-column justify-center items-center">
          <h2 className="text-2xl font-black text-[#014B96] mb-2 leading-snug">
            ¡Gracias por responder!
          </h2>
          <p className="text-gray-500 text-md leading-relaxed mb-2 w-[80%]">
            El equipo comercial te va a estar contactando a la brevedad para asesorarte.
          </p>
          <p className="text-gray-500 text-md leading-relaxed mb-10 w-[90%]">
            Mientras tanto, podés consultar nuestro portafolio en nuestra web.
          </p>
          <button
            onClick={() => navigate('/productos')}
            className="w-[80%] bg-[#014B96] text-white font-bold py-4 text-base"
          >
            Ver portafolio
          </button>
        </div>
      </main>

      <footer className="bg-[#014B96] py-5 text-center">
        <p className="text-white text-sm mb-1">Copyright © BASF SA 2025</p>
        <a
          href="/politica-privacidad"
          className="text-white text-sm underline"
        >
          Política de Privacidad
        </a>
      </footer>
    </div>
  );
}

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState(null);
  const [discarded, setDiscarded] = useState(false);
  const [qualified, setQualified] = useState(false);
  const navigate = useNavigate();

  const question = QUESTIONS[step];
  const progress = ((step + 1) / QUESTIONS.length) * 100;

  const handleContinuar = () => {
    if (!selected) return;

    if (step === 0) {
      selected === 'a' ? advance() : setDiscarded(true);
    } else if (step === 1) {
      selected === 'a' ? setQualified(true) : advance();
    } else if (step === 2) {
      selected === 'a' ? setDiscarded(true) : setQualified(true);
    }
  };

  const advance = () => {
    setSelected(null);
    setStep((s) => s + 1);
  };

  const handleVolver = () => {
    if (step === 0) {
      navigate('/');
    } else {
      setSelected(null);
      setStep((s) => s - 1);
    }
  };

  if (discarded) return <DiscardScreen />;
  if (qualified) return <ThankYouScreen />;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="py-8">
        <div className="flex items-center justify-center px-6">
          <img src={logoHeader} alt="Logo de BASF" fetchpriority="high" className="bg-[#014B96] h-16" />
        </div>
      </header>

      <main className="flex-1 flex flex-col justify-center items-center px-6 pt-4 pb-10">
        <div className="w-full max-w-sm flex flex-col gap-6">

          {/* Pregunta */}
          <div className="text-center">
            <h2 className="text-2xl font-black text-[#014B96] leading-snug mb-2">
              {question.text}
            </h2>
            {question.subtitle && (
              <p className="text-md text-gray-500">({question.subtitle})</p>
            )}
          </div>

          {/* Opciones */}
          <div className="flex flex-col gap-4">
            {question.options.map((opt) => {
              const isSelected = selected === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => setSelected(opt.id)}
                  className={`
                    flex items-center gap-3 w-full px-3 py-3 rounded-lg border-2 text-left transition-all duration-150
                    ${isSelected
                      ? 'border-gray bg-blue-50'
                      : 'border-gray bg-white hover:border-gray-300'
                    }
                  `}
                >
                  <span className={`
                    shrink-0 w-5 h-5 rounded flex items-center justify-center border-2 transition-colors duration-150
                    ${isSelected ? 'bg-gray border-[#014B96]' : 'bg-white border-gray-300'}
                  `}>
                    {isSelected && <CheckIcon />}
                  </span>
                  <span className={`text-sm font-medium ${isSelected ? 'text-gray-700' : 'text-gray-700'}`}>
                    {opt.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Botones */}
          <div className="flex flex-col items-center gap-3 mt-2">
            <button
              onClick={handleContinuar}
              disabled={!selected}
              className={`
                w-[80%] py-4 rounded-sm font-bold text-base text-white transition-colors duration-150
                ${selected ? 'bg-[#014B96] hover:bg-[#013d7a]' : 'bg-gray-300 cursor-not-allowed'}
              `}
            >
              Continuar
            </button>
            <button
              onClick={handleVolver}
              className="text-[#014B96] font-semibold text-sm hover:underline"
            >
              Volver
            </button>
          </div>

        </div>
      </main>

      {/* Progreso — fondo de pantalla */}
      <div className="w-full px-6 pb-6">
        <p className="text-center text-xs font-semibold text-[#014B96] mb-2">
          Pregunta {step + 1} de {QUESTIONS.length}
        </p>
        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#014B96] rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
