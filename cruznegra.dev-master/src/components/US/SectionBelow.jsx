import { motion } from "framer-motion";

const SectionBellow = () => {
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
      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Primer Div */}
        <motion.div
          className="p-4 rounded-lg shadow-md"
          variants={leftVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="text-white font-bold text-xl md:text-3xl mb-0 md:mb-4">
            We are a forward-thinking company specializing in custom software
            development. Our multidisciplinary team excels in technologies like
            React, Node.js, Python, Django, and more, delivering tailored
            digital solutions.
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
              We are driven by passion, ethics, and commitment, prioritizing
              continuous innovation and personalized attention.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionBellow;
