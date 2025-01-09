import logo1 from "../../assets/CruzNegra.svg";
import logo2 from "../../assets/Logo.svg";
import { ReactTyped } from "react-typed"; // Importamos la librería react-typed

const HeaderImg = () => {
  return (
    <div className="relative w-full h-[540px]">
      {/* Contenedor de logos */}
      <div className="absolute inset-0 flex justify-center items-center flex-col p-3">
        <div className="w-full md:w-10/12 justify-center ">
          <div className="flex justify-center items-center ">
            <img
              src={logo1}
              alt="Logo 1"
              className="w-10 h-10 md:w-28 md:h-28 mr-2 md:mr-10"
            />
            <img
              src={logo2}
              alt="Logo 2"
              className="w-8/12 " // Logo 2 responsivo
            />
          </div>
          <div className=" p-0  justify-center flex items-center">
            <p className="text-white text-end font-normal uppercase text-sm md:text-2xl w-full md:w-10/12 pr-8  md:p-0 md:pr-5">
              <ReactTyped
                strings={["Think. Code. Evolve."]} // Las frases que cambiarán
                typeSpeed={100} // Velocidad al escribir
                backSpeed={100} // Velocidad al borrar
                backDelay={1000} // Tiempo antes de empezar a borrar
                startDelay={500} // Tiempo antes de empezar a escribir
                loop // Hace que las frases se repitan
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderImg;
