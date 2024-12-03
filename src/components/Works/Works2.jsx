import { motion } from "framer-motion";
import p3 from "../../assets/projects/p3.png";
import p4 from "../../assets/projects/p4.png";
import work from "../../assets/projects/work.svg";
import "./works.css";

const WorksRight = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1 } },
  };

  const tagVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 px-4 py-8 gap-4 md:gap-8 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Se activa cuando el 30% del elemento entra en el viewport
    >
      {/* Primer div - Icono "work" a la izquierda */}
      <motion.div
        className="w-full flex items-center justify-start rounded-lg relative mt-28 md:mt-0 order-2 md:order-1"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Imagen centrada en el div para pantallas móviles */}
        <motion.div
          className="w-full flex justify-center md:justify-start items-end ml-0 md:ml-5"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            src={work}
            alt="Icono"
            className="w-auto h-auto object-contain mb-4 md:mb-0"
          />
        </motion.div>
      </motion.div>

      {/* Segundo div - Imagen de proyectos a la derecha */}
      <motion.div
        className="relative col-span-2 flex items-center justify-center order-1 md:order-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Imagen para pantallas grandes */}
        <motion.img
          src={p3}
          alt="Vista previa de proyectos"
          className="w-full h-auto object-cover rounded-lg md:block hidden"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        />

        {/* Imagen para pantallas móviles */}
        <motion.img
          src={p4}
          alt="Vista previa de proyectos"
          className="w-full h-auto object-cover rounded-lg md:hidden block"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        />

        {/* Contenedor de información */}
        <motion.div
          className="w-1/2 absolute md:bottom-10 md:-left-40 boxProjecto1 bg-black bg-opacity-70 text-white p-0 md:p-4  backdrop-blur-sm px-4 border-t border-l border-r border-neutral_lighter rounded-t-lg"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-lg md:text-xl font-bold py-2">
            Project Name Here
          </h2>
          <p className="text-sm md:text-base md:mt-2 mt-0 md:py-2 py-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex flex-wrap gap-2 mt-0 md:mt-3 py-0 md:py-2">
            {["#Etiqueta1", "#Etiqueta2", "#Etiqueta3"].map((tag, i) => (
              <motion.span
                key={tag}
                className="px-2 py-1 text-sm md:text-base text-white border-t border-l border-r border-white rounded-t-lg bg-transparent"
                custom={i}
                variants={tagVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WorksRight;
