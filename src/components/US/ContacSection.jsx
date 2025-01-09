import { motion } from "framer-motion";
import section from "../../assets/3.jpg";

const ContacSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <div className="relative w-full py-6 px-4 h-[284px] md:h-[500px] flex items-center justify-center">
      {/* Imagen */}
      <img
        src={section}
        alt="Sección de contacto"
        className="absolute w-full h-full "
      />

      {/* Contenedor de texto con animación */}
      <motion.div
        className="relative z-10 text-center bg-opacity-70 text-white p-6 md:p-4 px-8 md:px-6 rounded-lg  transition-all border-neutral_lighter rounded-t-lg"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h1 className="text-xl md:text-4xl font-bold mb-0 md:mb-6">
          You deserve the success
        </h1>
        <p className="text-md md:text-xl my-1 mb-5 md:mb-8">
          Let us help you achieve it.
        </p>
        <a
          href="#form"
          type="button"
          className="bg-white text-black_cruznegra px-6 py-3 text-sm rounded-md border-2 border-transparent hover:bg-transparent hover:text-white hover:border-white transition-all"
        >
          Let's Talk
        </a>
      </motion.div>
    </div>
  );
};

export default ContacSection;
