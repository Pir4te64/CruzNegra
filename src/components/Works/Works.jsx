import { motion } from "framer-motion";
import "./works.css";
import PropTypes from "prop-types";

const WorksLeft = ({ imageDesktop, projectName, description, tags = ["#Etiqueta1", "#Etiqueta2", "#Etiqueta3"] }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      } 
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        duration: 1,
        ease: "easeOut"
      } 
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { 
        delay: i * 0.2, 
        duration: 0.5,
        ease: "easeOut"
      },
    }),
  };

  return (
    <motion.div
      className="relative flex items-center justify-center w-full py-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      style={{ cursor: 'default' }}
    >
      {/* Imagen de proyecto */}
      <motion.img
        src={imageDesktop}
        alt="Vista previa de proyectos"
        className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-lg"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      />
      {/* Overlay de información */}
      <motion.div
        className="absolute top-1/2 left-full -translate-y-1/2 ml-[-30%] max-w-md w-[320px] bg-black bg-opacity-70 text-white p-6 rounded-lg border border-white/20 shadow-xl backdrop-blur-md z-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <h2 className="text-lg md:text-xl font-bold mb-2">{projectName}</h2>
        <p className="text-sm md:text-base mb-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              className="px-3 py-1 text-sm md:text-base text-white border border-white rounded-lg bg-transparent"
              custom={i}
              variants={tagVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

WorksLeft.propTypes = {
  imageDesktop: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string)
};

export default WorksLeft;
