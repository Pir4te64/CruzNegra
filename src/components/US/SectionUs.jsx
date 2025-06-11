import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from 'react-i18next';

const SectionUs = () => {
  const sectionRef = useRef(null); // Referencia al contenedor principal
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 }); // Detecta si el contenedor está visible
  const { t } = useTranslation();

  return (
    <div className="w-full px-4 py-10" ref={sectionRef}>
      <div
        className="max-w-full mx-0 md:mx-16 grid grid-cols-1 md:grid-cols-2 gap-6"
        data-scroll-section
        data-scroll-call="section"
        id="about"
      >
        {/* Primer Div */}
        <div className="p-4 rounded-lg shadow-md">
          <motion.p
            className="text-white font-bold text-lg md:text-xl mb-3"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            {t('philosophy')}
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[t('innovate'), t('code'), t('transform')].map((text) => (
              <motion.button
                key={text}
                className="px-6 py-2 text-white border-t border-l border-r border-white rounded-t-lg bg-transparent"
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
        <div className="p-4 rounded-lg shadow-md min-h-[300px] flex flex-col justify-between">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-white font-bold text-base md:text-lg">
              {t('driven')}
            </p>
            <p className="text-white font-normal text-sm md:text-base py-1">
              {t('goal')}
            </p>
          </motion.div>
          <motion.div
            className="mt-2 flex justify-start"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a
              type="button"
              href="#form"
              className="bg-white text-black_cruznegra px-3 py-1 text-xs rounded-md border-2 border-transparent hover:bg-transparent hover:text-white hover:border-white transition-all"
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
                backgroundColor: "rgba(255, 255, 255, 0.3)",
              }}
            >
              {t('lets_talk')}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionUs;
