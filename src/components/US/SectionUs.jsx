import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const SectionUs = () => {
  const sectionRef = useRef(null); // Referencia al contenedor principal
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 }); // Detecta si el contenedor está visible
  const { t } = useTranslation();

  return (
    <div className="w-full px-4 py-4" ref={sectionRef}>
      <div
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
        data-scroll-section
        data-scroll-call="section"
        id="about"
      >
        {/* Primer Div */}
        <div className="p-4 rounded-lg shadow-md flex flex-col justify-center items-center md:items-end text-center md:text-right">
          <motion.p
            className="text-white font-bold text-xl md:text-2xl mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            {t("philosophy")}
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-end w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[t("innovate"), t("code"), t("transform")].map((text) => (
              <motion.button
                key={text}
                className="min-w-[120px] px-6 py-2 text-white border-t border-l border-r border-white rounded-t-lg bg-transparent text-base md:text-lg"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {text}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Segundo Div */}
        <div className="p-4 rounded-lg shadow-md flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-white font-bold text-xl md:text-2xl">
              {t("driven")}
            </p>
            <p className="text-white font-normal text-base md:text-lg py-1">
              {t("goal")}
            </p>
          </motion.div>
          <motion.div
            className="flex justify-center md:justify-start w-full mt-4"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a
              type="button"
              href="#form"
              className="bg-white text-black_cruznegra px-6 py-2 text-base rounded-md border-2 border-transparent hover:bg-transparent hover:text-white hover:border-white transition-all font-semibold"
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
                backgroundColor: "rgba(255, 255, 255, 0.3)",
              }}
            >
              {t("lets_talk")}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionUs;
