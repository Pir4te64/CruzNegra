import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const SectionBellow = () => {
  const { t } = useTranslation();
  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="w-full px-4 py-8 md:pt-5" id="">
      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Primer Div */}
        <motion.div
          className="p-4 rounded-lg shadow-md"
          variants={leftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="text-white font-bold text-xl md:text-3xl mb-0 md:mb-4">
            {t("about_company")}
          </p>
        </motion.div>

        {/* Segundo Div */}
        <motion.div
          className="p-4 rounded-lg shadow-md flex flex-col justify-between"
          variants={rightVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <div>
            <p className="text-white font-bold text-lg md:text-2xl">
              {t("driven")}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionBellow;
