import logo1 from "../../assets/CruzNegra.svg";
import logo2 from "../../assets/Logo.svg";

const HeaderImg = () => {
  return (
    <div className="relative w-full h-full min-h-inherit flex items-center justify-center">
      {/* Contenedor de logos y texto */}
      <div className="flex flex-col items-center justify-center w-full h-full p-3 z-10">
        <div className="w-full md:w-8/12 justify-center">
          <div className="flex justify-center items-center w-full">
            <img
              src={logo1}
              alt="Logo Cruz Negra"
              className="w-10 h-10 md:w-28 md:h-28 mr-2 md:mr-10"
            />
            <img src={logo2} alt="Logo" className="w-8/12" />
          </div>
          <div className="p-0 flex justify-center items-center w-full">
            <p className="text-white text-center font-normal uppercase text-sm md:text-2xl w-full md:w-10/12 md:p-0">
              Think. Code. Evolve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderImg;
