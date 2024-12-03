import { Link } from "react-scroll";
import "./Header.css";
import { motion } from "framer-motion";
const Links = () => {
  return (
    <motion.div
      className="absolute -top-10 left-14 p-3 rounded shadow-lg"
      initial={{ opacity: 0, scale: 0.8, y: -10 }} // Aparece reducido, opaco y desplazado
      animate={{ opacity: 1, scale: 1, y: 0 }} // Se escala y se posiciona normalmente
      exit={{ opacity: 0, scale: 0.8, y: -10 }} // Se oculta con la misma animación inversa
      transition={{ duration: 0.3, ease: "easeInOut" }} // Animación suave y rápida
    >
      <ul className="space-y-2">
        <li>
          <Link
            className="link-hover-effect"
            to="about"
            smooth="easeInQuad"
            duration={500}
            offset={-50}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="link-hover-effect"
            to="project"
            smooth="easeInQuad"
            duration={500}
            offset={-50}
          >
            Project
          </Link>
        </li>
        <li>
          <Link
            className="link-hover-effect"
            to="contact"
            smooth="easeInQuad"
            duration={500}
            offset={-50}
          >
            Contact
          </Link>
        </li>
      </ul>
    </motion.div>
  );
};

export const LinksMobile = () => {
  return (
    <div className="flex space-x-6 mx-auto">
      <Link
        to="about"
        smooth="easeInQuad"
        duration={500}
        offset={-50}
        className="text-white hover:text-gray-400 font-normal"
      >
        About
      </Link>
      <Link
        to="project"
        smooth="easeInQuad"
        duration={500}
        offset={-50}
        className="text-white hover:text-gray-400 font-normal"
      >
        Project
      </Link>
      <Link
        to="contact"
        smooth="easeInQuad"
        duration={500}
        offset={-50}
        className="text-white hover:text-gray-400 font-normal"
      >
        Contact
      </Link>
    </div>
  );
};

export default Links;
