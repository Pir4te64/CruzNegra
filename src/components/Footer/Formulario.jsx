import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Formulario = () => {
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
            title: "¡Email enviado!",
            text: "Tu mensaje se ha enviado correctamente.",
            confirmButtonText: "OK",
          });
          formRef.current.reset(); // Limpia el formulario después del envío.
        },
        (error) => {
          console.error("Error al enviar el correo:", error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
            confirmButtonText: "Cerrar",
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
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-2 rounded-md border border-gray-600 bg-black_cruznegra focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Your name"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2 rounded-md  border border-gray-600 bg-black_cruznegra focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="Your Email"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full px-4 py-2 rounded-md bg-black_cruznegra border border-gray-600 focus:ring-2 focus:ring-white focus:outline-none"
          rows="4"
          placeholder="Type your Message"
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
        {isLoading ? "Sending, wait..." : "Submit"}
      </button>
    </form>
  );
};

export default Formulario;
