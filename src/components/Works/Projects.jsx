import { motion } from "framer-motion";
import { useState } from "react";
import WorksLeft from "./Works";
import WorksRight from "./Works2";
import p1 from "../../assets/projects/p1.png";
import p2 from "../../assets/projects/p2.png";
import p5 from "../../assets/projects/p5.png";
import p6 from "../../assets/projects/p6.png";

const Projects = () => {
  const [showExtraProjects, setShowExtraProjects] = useState(false);

  const toggleViewMore = () => {
    setShowExtraProjects((prev) => !prev);
  };

  // Variantes para las animaciones
  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.8 } }, // Para ocultar
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, x: 100, transition: { duration: 0.8 } }, // Para ocultar
  };

  return (
    <div id="project" className="pt-10 md:pt-0">
      {/* Proyectos iniciales */}
      <div>
        <motion.div
          variants={leftVariants}
          initial="hidden"
          whileInView="visible"
          exit="hidden" // Ocultar al salir del viewport
          viewport={{ once: false, amount: 0.3 }} // Permitir que se vuelva a animar
        >
          <WorksLeft
            imageDesktop={p1}
            imageMobile={p2}
            projectName="Project Name Here"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            tags={["Etiqueta1", "Etiqueta2", "Etiqueta3"]}
          />
        </motion.div>
        <motion.div
          variants={rightVariants}
          initial="hidden"
          whileInView="visible"
          exit="hidden" // Ocultar al salir del viewport
          viewport={{ once: false, amount: 0.3 }}
        >
          <WorksRight />
        </motion.div>
        <motion.div
          variants={leftVariants}
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.3 }}
        >
          <WorksLeft
            imageDesktop={p5}
            imageMobile={p6}
            projectName="Project Name Here"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            tags={["Etiqueta1", "Etiqueta2", "Etiqueta3"]}
          />
        </motion.div>
      </div>

      {/* Mostrar/ocultar proyectos adicionales */}
      {showExtraProjects && (
        <div>
          <motion.div
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.3 }}
          >
            <WorksLeft
              imageDesktop={p1}
              imageMobile={p2}
              projectName="Project Name Here"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              tags={["Etiqueta1", "Etiqueta2", "Etiqueta3"]}
            />
          </motion.div>
          <motion.div
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.3 }}
          >
            <WorksRight />
          </motion.div>
          <motion.div
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.3 }}
          >
            <WorksLeft
              imageDesktop={p5}
              imageMobile={p6}
              projectName="Project Name Here"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              tags={["Etiqueta1", "Etiqueta2", "Etiqueta3"]}
            />
          </motion.div>
        </div>
      )}

      {/* Botón para alternar la visibilidad */}
      <div className="flex justify-center items-center mt-5 md:mt-8 mb-8">
        <button
          onClick={toggleViewMore}
          className="px-6 py-2 bg-transparent text-white border rounded-lg shadow-md hover:bg-white hover:text-black_cruznegra focus:outline-none transition-all"
        >
          {showExtraProjects ? "Hide Projects" : "View All"}
        </button>
      </div>
    </div>
  );
};

export default Projects;
