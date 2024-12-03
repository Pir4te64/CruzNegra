import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import row from "../assets/rowup.png"; // Asegúrate de que la ruta sea correcta

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true); // Mostrar el botón si se ha hecho scroll más de 300px
      } else {
        setIsVisible(false); // Ocultar el botón si no se ha hecho suficiente scroll
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Botón con la imagen animada */}
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }} // Inicia pequeño y transparente
          animate={{ opacity: 1, scale: 1 }} // Se vuelve completamente visible y de tamaño normal
          transition={{ duration: 0.4 }} // Duración de la animación
          className="fixed bottom-8 right-8 z-50"
        >
          <Link
            to="top" // El ID de la sección donde debe hacer scroll
            smooth={true}
            duration={500} // Duración de la animación del scroll
            className="p-4 rounded-full shadow-lg cursor-pointer"
          >
            <img
              src={row} // Usamos la imagen de la flecha como ícono
              alt="Scroll to top"
              className="w-12 h-12" // Ajusta el tamaño de la imagen según sea necesario
            />
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default ScrollToTopButton;
