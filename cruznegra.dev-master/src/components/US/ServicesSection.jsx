import "./seccion.css";
import ServiceCard from "./ServicesCard"; // Importa el componente reutilizable
import { services } from "./services";

const ServicesSection = () => {
  return (
    <>
      <div className=" relative w-full px-0 md:px-4 py-10 custom-background">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 ">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
              techStack={service.techStack}
              direccion={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
