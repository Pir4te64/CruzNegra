import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./seccion.css";

const ServiceCard = ({ image, title, description, techStack, direccion }) => {
  const cardRef = useRef(null); // Referencia para detectar si está en el viewport
  const isInView = useInView(cardRef, { once: true, amount: 0.3 }); // `once: true` para animar solo la primera vez

  return (
    <motion.div
      className="px-0 py-2 sm:px-2 sm:py-8 rounded-lg  flex flex-col justify-center items-center flex-1 min-w-[350px]  "
      ref={cardRef} // Asignamos la referencia
      initial={{ opacity: 0, y: 50 }} // Estado inicial (fuera de vista)
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Se anima solo cuando está visible
      transition={{ duration: 0.8, ease: "easeOut" }} // Animación suave
      whileHover={{ scale: 1.05 }} // Crece ligeramente al pasar el cursor
    >
      {/* Contenedor de la imagen y el título */}
      <motion.div
        className={`flex items-center justify-start gap-2 md:gap-6 mb-0 md:mb-5  w-10/12  ${
          direccion === "right" ? "flex-row-reverse sm:flex-row" : "flex-row"
        }`}
        initial={{ opacity: 0, x: direccion === "right" ? 50 : -50 }} // Desliza desde un lado dependiendo de la dirección
        animate={isInView ? { opacity: 1, x: 0 } : {}} // Se centra y se hace visible
        transition={{ duration: 0.6 }}
      >
        {/* Imagen */}
        <motion.div
          className="w-12 h-12 sm:w-20 sm:h-20 lg:w-20 lg:h-20 flex-shrink-0"
          initial={{ scale: 0.8, opacity: 0 }} // Comienza más pequeña y transparente
          animate={isInView ? { scale: 1, opacity: 1 } : {}} // Escala al tamaño completo y se hace visible
          transition={{ duration: 0.8, delay: 0.2 }} // Retraso para sincronizar con el título
        >
          <img
            src={image}
            alt={title}
            className="w-full  md:h-full object-contain "
          />
        </motion.div>

        {/* Título */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -20 }} // Comienza desplazado ligeramente
          animate={isInView ? { opacity: 1, x: 0 } : {}} // Se centra y se hace visible
          transition={{ duration: 0.8, delay: 0.4 }} // Retraso después de la imagen
        >
          <h3
            className={`text-base sm:text-xl lg:text-2xl font-bold mb-0 md:mb-2 text-white  ${
              direccion === "right" ? "text-right sm:text-left" : "text-left"
            }`}
          >
            {title}
          </h3>
        </motion.div>
      </motion.div>

      {/* Descripción y TechStack */}
      <motion.div
        className=" w-10/12 rounded-md flex flex-col justify-between items-center "
        initial={{ opacity: 0, y: 20 }} // Comienza desplazado ligeramente hacia abajo
        animate={isInView ? { opacity: 1, y: 0 } : {}} // Se centra y se hace visible
        transition={{ duration: 0.8, delay: 0.6 }} // Retraso para aparecer después del título
      >
        <div className="mt-5 md:mt-4 mx-0 md:mx-6 flex flex-col justify-center items-center h-auto md:h-[150px]">
          <p className="text-white text-center font-medium text-sm sm:text-xl  ">
            {description}
          </p>
        </div>
        <motion.div
          className="mt-4 bg-white w-full p-1 rounded-b-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}} // Escala al tamaño completo y se hace visible
          transition={{ duration: 0.8, delay: 0.8 }} // Aparece al final
        >
          <p className="text-black_cruznegra px-4 text-center font-extrabold text-[9px] sm:text-[10px] md:text-[12px] lg:text-[14px] whitespace-nowrap">
            {techStack}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
