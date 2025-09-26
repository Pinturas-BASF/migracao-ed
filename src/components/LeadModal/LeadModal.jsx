import { useMemo, useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { saveData } from "../../lib/sheetsApi";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
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


export default function LeadModal({ isOpen, onClose }) {
  const { executeRecaptcha } = useGoogleReCaptcha();
  
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
      website: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const {
    register,
    handleSubmit,
    formState: {isSubmitting, isValid},
    reset,
    setError,
  } = methods;

  useEffect(() => { 
    if (!isOpen) reset();
  }, [isOpen, reset]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (!executeRecaptcha) {
        setError("root", { message: "reCAPTCHA no está listo. Probá nuevamente." });
        return;
      }

      const captchaToken = await executeRecaptcha("lead_submit");

      await saveData({
        action: "Saved",
        leadId, 
        ...data,
        captchaToken,
        createdAt: new Date().toISOString(),
      });

      //redirectTo();
    } catch (error) {
      alert("No se pudo guardar el lead. Revisá tu conexión.");
      console.error(error);
    }
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40">
      <div className="bg-white w-full max-w-[742px] rounded-2xl p-16 shadow-xl relative">
          <button
            type="button"
            className="text-sm text-gray-500 hover:text-gray-700 absolute top-[0.2rem] right-[0.2rem]"
            onClick={onClose}
          >
            <img src={closeIcon}/>
          </button>
        <div className="mb-4 flex flex-col items-center justify-between">

          <div className="w-full flex justify-center">
          <h2 className="text-4xl font-bold text-[#014B96]">
            Únete a BASF
          </h2>
          </div>

        </div>

        <FormProvider {...methods}>
          <form onSubmit={onSubmit} className="space-y-3">

              <>
                  <input type="text" {...register("website")} autoComplete="off" className="hidden" tabIndex={-1} />  
                  <input {...register("nombre")} placeholder="Nombre y Apellido" className="mt-1 w-full !rounded border px-3 py-2" />
                
                  <input {...register("email")} type="email" placeholder="Correo electrónico" className="mt-4 w-full !rounded border px-3 py-2" />
                
                  <input {...register("empresa")} placeholder="Empresa" className="mt-4 w-full !rounded border px-3 py-2" />
                
                  <input {...register("telefono")} placeholder="Teléfono" className="mt-4 w-full !rounded border px-3 py-2" />
                
                  <input {...register("cargo")} placeholder="Cargo" className="mt-4 w-full !rounded border px-3 py-2" />

                  <input {...register("ciudad")} placeholder="Ciudad" className="mt-4 w-full !rounded border px-3 py-2" />
                  
                  <input {...register("productosInteres")} placeholder="Productos de interés" className="mt-4 w-full !rounded border px-3 py-2" />

                  <input {...register("politicas")} type="checkbox" name="politicas" id="politicas" />

                  <label htmlFor="politicas" className="px-2 mt-4 !mb-8">He leído y acepto los Términos y Condiciones</label>


                <div className="pt-2 flex justify-center w-full">
                  <button
                    type="submit"
                    disabled={!isValid || isSubmitting || !executeRecaptcha}
                    aria-disabled={!isValid || isSubmitting || !executeRecaptcha}
                    className="w-[40%] bg-[#014B96] px-5 py-3 text-white disabled:text-gray-600 disabled:bg-[#CCCCCC] font-black"
                  >
                    {isSubmitting ? (
                      <>
                      <span className="inline-block h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                      </>
                    ) : "Confirmar"}
                  </button>
                </div>
              </>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
