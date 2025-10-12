import { useMemo, useEffect, useRef, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { saveData } from "../../lib/sheetsApi";
import ReCAPTCHA from "react-google-recaptcha";
import closeIcon from '../../assets/icons/close.svg'

const FullSchema = z.object({
  nombre: z.string().min(2, "Nombre y Apellido"),
  email: z.string().email("Correo electrónico"),
  empresa: z.string().min(2, "Empresa"),
  telefono: z.string().min(6, "Teléfono"),
  cargo: z.string().optional(),
  ciudad: z.string().optional(),
  productosInteres: z.string().optional(),
  politicas: z.literal(true, { errorMap: () => ({ message: "Debes aceptar los Términos y Condiciones" }) }),
});

const redirectTo = () => {
  window.open("/#/landing-leads/Gracias", "_self");
}

export default function LeadModal({ isOpen, onClose }) {
  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  const leadId = useMemo(() => {
    if (window.crypto?.randomUUID) return window.crypto.randomUUID();
    return "lid_" + Math.random().toString(36).slice(2) + Date.now();
  }, []);

  const methods = useForm({
    resolver: zodResolver(FullSchema),
    defaultValues: {
      nombre: "",
      email: "",
      empresa: "",
      telefono: "",
      cargo: "",
      ciudad: "",
      productosInteres: "",
      politicas: false,
      website: "", // honeypot
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isValid },
    reset,
    setError,
  } = methods;

  useEffect(() => {
    if (!isOpen) {
      reset();
      setCaptchaToken(null);
      if (recaptchaRef.current && typeof recaptchaRef.current.reset === "function") {
        recaptchaRef.current.reset();
      }
      document.body.style.removeProperty("overflow");
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.removeProperty("overflow");
    };
  }, [isOpen, reset]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (!captchaToken) {
        setError("root", { message: "Por favor, completá el reCAPTCHA." });
        return;
      }
      await saveData({
        action: "Saved",
        leadId,
        ...data,
        aceptoTerminos: data.politicas ? true : false,
        captchaToken,
        createdAtMs: Date.now(),
      });
      redirectTo();
    } catch (error) {
      console.log("No se pudo guardar el lead. Revisá tu conexión.");
    }
  });

  const [compact, setCompact] = useState(false);
useEffect(() => {
  const w = () => setCompact(window.innerWidth < 380);
  w();
  window.addEventListener("resize", w);
  return () => window.removeEventListener("resize", w);
}, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40" aria-modal="true" role="dialog">
      <div className="min-h-full grid place-items-center py-6 px-3 md:py-10 md:px-4">
        <div
          className="
            relative bg-white w-full
            max-w-[95vw] md:max-w-[420px] xl:max-w-[720px]
            rounded-2xl shadow-xl
            px-4 py-14 md:py-16 md:!px-16
          "
        >
          <button
            type="button"
            className="absolute top-2 right-2 p-2 rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#014B96]"
            onClick={onClose}
            aria-label="Cerrar"
          >
            <img src={closeIcon} alt="" className="h-10 w-10 md:h-16 md:w-16" />
          </button>

          <div className="mb-4 flex justify-center">
            <h2 className="text-2xl md:text-4xl font-black text-[#014B96] text-center">Únete a BASF</h2>
          </div>

          <FormProvider {...methods} >
            <form onSubmit={onSubmit} className="space-y-3 w-full flex flex-col justify-center">
              {/* Honeypot */}
              <input
                type="text"
                {...register("website")}
                autoComplete="off"
                className="hidden"
                tabIndex={-1}
                aria-hidden="true"
              />

              <div className="text-center flex flex-col w-full gap-3">
                {/* Nombre */}
                <div className="relative">
                  <input
                    {...register("nombre")}
                    placeholder=" "
                    required
                    aria-required="true"
                    autoComplete="name"
                    className="peer w-full rounded-lg border px-3 py-3 md:py-2 placeholder-transparent text-base md:text-sm"
                  />
                  <label className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 transition
                                    peer-placeholder-shown:opacity-100 peer-focus:opacity-0 peer-[&:not(:placeholder-shown)]:opacity-0">
                    Nombre y Apellido<span className="text-red-500">*</span>
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    {...register("email")}
                    type="email"
                    placeholder=" "
                    required
                    aria-required="true"
                    autoComplete="email"
                    inputMode="email"
                    className="peer w-full rounded-lg border px-3 py-3 md:py-2 placeholder-transparent text-base md:text-sm"
                  />
                  <label className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 transition
                                    peer-placeholder-shown:opacity-100 peer-focus:opacity-0 peer-[&:not(:placeholder-shown)]:opacity-0">
                    Correo electrónico<span className="text-red-500">*</span>
                  </label>
                </div>

                {/* Empresa */}
                <div className="relative">
                  <input
                    {...register("empresa")}
                    placeholder=" "
                    required
                    aria-required="true"
                    autoComplete="organization"
                    className="peer w-full rounded-lg border px-3 py-3 md:py-2 placeholder-transparent text-base md:text-sm"
                  />
                  <label className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 transition
                                    peer-placeholder-shown:opacity-100 peer-focus:opacity-0 peer-[&:not(:placeholder-shown)]:opacity-0">
                    Empresa<span className="text-red-500">*</span>
                  </label>
                </div>

                {/* Teléfono */}
                <div className="relative">
                  <input
                    {...register("telefono")}
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder=" "
                    required
                    aria-required="true"
                    className="peer w-full rounded-lg border px-3 py-3 md:py-2 placeholder-transparent text-base md:text-sm"
                  />
                  <label className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 transition
                                    peer-placeholder-shown:opacity-100 peer-focus:opacity-0 peer-[&:not(:placeholder-shown)]:opacity-0">
                    Teléfono<span className="text-red-500">*</span>
                  </label>
                </div>

                {/* Cargo */}
                <div>
                  <select
                    {...register("cargo")}
                    defaultValue=""
                    className="w-full rounded-lg border px-3 py-3 md:py-2 bg-white text-base md:text-sm"
                  >
                    <option value="" disabled> Cargo </option>
                    <option value="Dueño">Dueño</option>
                    <option value="Comprador">Comprador</option>
                    <option value="Técnico">Técnico</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                {/* Ciudad */}
                <div className="relative">
                  <input
                    {...register("ciudad")}
                    placeholder="Ciudad"
                    autoComplete="address-level2"
                    className="w-full rounded-lg border px-3 py-3 md:py-2 text-base md:text-sm"
                  />
                </div>

                {/* Productos de interés */}
                <div className="relative">
                  <input
                    {...register("productosInteres")}
                    placeholder="Productos de interés"
                    className="w-full rounded-lg border px-3 py-3 md:py-2 text-base md:text-sm"
                  />
                </div>
              </div>

              {/* Términos */}
              <div className="mt-4 mb-4 flex items-center gap-2">
                <input
                  {...register("politicas")}
                  type="checkbox"
                  id="politicas"
                  className=" h-5 w-5"
                />
                <label htmlFor="politicas" className="text-sm md:text-base leading-5 underline cursor-pointer" onClick={() => {
                  window.open("/#/landing-leads/Términos", "_blank");
                }}>
                  He leído y acepto los Términos y Condiciones
                </label>
              </div>

            <div className="mt-2 flex justify-center md:justify-start max-w-full overflow-hidden">
              <div className="-mx-4 md:mx-0 w-full">
                <div className={compact ? "h-[62px]" : "h-[84px]"}>
                  <div className={compact ? "min-w-[180px]" : "min-w-[304px]"}>
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6LeSPNsrAAAAAHfEt7vnumveD6ZYVe4Miu-tpxj7"
                      size={compact ? "compact" : "normal"}
                      onChange={(token) => setCaptchaToken(token)}
                      onExpired={() => setCaptchaToken(null)}
                      onErrored={() => setCaptchaToken(null)}
                    />
                  </div>
                </div>
              </div>
            </div>

              <div className="pt-2 flex justify-center w-full">
                <button
                  type="submit"
                  disabled={!isValid || isSubmitting || !captchaToken}
                  aria-disabled={!isValid || isSubmitting || !captchaToken}
                  className="w-full md:w-[45%] bg-[#014B96] px-5 py-3 text-white disabled:text-[rgb(90,90,90)] disabled:bg-[#CCCCCC] font-black flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="inline-block h-4 w-4 border-2 border-white border-t-transparent animate-spin" />
                    </>
                  ) : "Confirmar"}
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
