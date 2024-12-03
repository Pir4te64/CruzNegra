import { motion } from "framer-motion";
import work from "../../assets/projects/work.svg";
import "./works.css";

const WorksLeft = ({ imageDesktop, imageMobile, projectName, description }) => {
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
      className="grid grid-cols-1 md:grid-cols-3 px-4 md:py-52 gap-4 md:gap-8 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Se activa cuando el 30% del elemento es visible
    >
      {/* Primer div - Imagen de proyectos */}
      <motion.div
        className="relative col-span-2 flex items-center justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Imagen para pantallas grandes */}
        <motion.img
          src={imageDesktop}
          alt="Vista previa de proyectos"
          className="w-full h-auto object-cover rounded-lg md:block hidden"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        />

        {/* Imagen para pantallas móviles */}
        <motion.img
          src={imageMobile}
          alt="Vista previa de proyectos"
          className="w-full h-auto object-cover rounded-lg md:hidden block"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        />

        <motion.div
          className="w-1/2 absolute md:bottom-10 md:-right-40 boxProjecto bg-black bg-opacity-70 text-white p-0 md:p-4  backdrop-blur-sm px-4 border-t border-l border-r border-neutral_lighter rounded-t-lg"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-lg md:text-xl font-bold py-2">{projectName}</h2>
          <p className="text-sm md:text-base md:mt-2 mt-0 md:py-2 py-1">
            {description}
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

      {/* Segundo div - Icono "work" */}
      <motion.div
        className="w-full flex items-center justify-end rounded-lg relative mt-28 md:mt-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Imagen centrada en el div para pantallas móviles */}
        <motion.div
          className="w-full flex justify-center md:justify-end items-end mr-0 md:mr-5"
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
    </motion.div>
  );
};

export default WorksLeft;
