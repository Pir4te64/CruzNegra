import { motion } from "framer-motion";
import clientsImage from "../../assets/4.jpg"; // Asegúrate de que esta imagen exista en la ruta indicada.
import TestimonialCard from "./Card";

const Clients = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <div className="relative w-full h-[1268px] md:h-[649px] my-20 flex flex-col items-center justify-center">
      <div className="absolute -top-5 left-0 blurryface  text-white h-20 z-50 w-full rounded-t-lg"></div>

      <img
        src={clientsImage}
        alt="Clientes"
        className="absolute w-full h-full object-cover rounded-lg shadow-md "
      />
      <div className="relative w-full h-3/4 flex flex-col items-center justify-center">
        {/* Título con animación */}
        <motion.h1
          className="relative z-10 pb-8 md:pb-0 text-2xl md:text-4xl font-bold text-center text-white"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Clients trust
        </motion.h1>

        {/* Contenedor de las tarjetas */}
        <div className="relative z-10 flex flex-wrap gap-4 px-4 justify-center">
          <section className="">
            <div className="px-4 mx-auto">
              <div className="flex flex-col items-center">
                <div className="relative md:mt-24 md:order-2">
                  <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
                    {/* Tarjetas con animaciones */}
                    {[
                      {
                        name: "Leslie Alexander",
                        title: "Freelance React Developer",
                        comment:
                          "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
                        image:
                          "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
                        rating: 5,
                      },
                      {
                        name: "Jacob Jones",
                        title: "Digital Marketer",
                        comment:
                          "Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.",
                        image:
                          "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
                        rating: 5,
                      },
                      {
                        name: "Jenny Wilson",
                        title: "Graphic Designer",
                        comment:
                          "I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.",
                        image:
                          "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
                        rating: 4,
                      },
                    ].map((testimonial, i) => (
                      <motion.div
                        key={testimonial.name}
                        className="flex flex-col overflow-hidden shadow-xl"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        custom={i}
                      >
                        <TestimonialCard
                          name={testimonial.name}
                          title={testimonial.title}
                          comment={testimonial.comment}
                          image={testimonial.image}
                          rating={testimonial.rating}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="absolute -bottom-5 left-0 blurryface-down  text-white h-20 z-50 w-full rounded-t-lg"></div>
    </div>
  );
};

export default Clients;
