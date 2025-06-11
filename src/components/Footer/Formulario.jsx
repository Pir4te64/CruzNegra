import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useTranslation } from 'react-i18next';

const Formulario = () => {
  const { t } = useTranslation();
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del formulario.
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_1h4ufum", // Reemplaza con tu Service ID.
        "template_ofzslmc", // Reemplaza con tu Template ID.
        formRef.current, // Referencia al formulario.
        "OnFxjh96VY04mSzI3" // Reemplaza con tu User ID.
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: t('form_success_title'),
            text: t('form_success_text'),
            confirmButtonText: t('form_success_ok'),
          });
          formRef.current.reset(); // Limpia el formulario después del envío.
        },
        (error) => {
          console.error("Error al enviar el correo:", error);
          Swal.fire({
            icon: "error",
            title: t('form_error_title'),
            text: t('form_error_text'),
            confirmButtonText: t('form_error_ok'),
          });
        }
      )
      .finally(() => setIsLoading(false));
  };

  return (
    <form
      id="form"
      ref={formRef}
      onSubmit={handleSubmit}
      className="w-full max-w-lg p-2 md:p-6 text-white"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          {t('name_label')}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-2 rounded-md border border-gray-600 bg-black_cruznegra focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder={t('name_placeholder')}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          {t('email_label')}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2 rounded-md  border border-gray-600 bg-black_cruznegra focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder={t('email_placeholder')}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          {t('message_label')}
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full px-4 py-2 rounded-md bg-black_cruznegra border border-gray-600 focus:ring-2 focus:ring-white focus:outline-none"
          rows="4"
          placeholder={t('message_placeholder')}
          required
          maxLength={200}
        ></textarea>
      </div>

      <button
        type="submit"
        className={`md:w-1/4 w-full px-4 py-2 font-medium rounded-lg ${
          isLoading
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-white text-black_cruznegra hover:bg-black_cruznegra hover:text-white  focus:ring-2 focus:ring-blue-500 focus:outline-none"
        }`}
        disabled={isLoading}
      >
        {isLoading ? t('sending') : t('submit')}
      </button>
    </form>
  );
};

export default Formulario;
