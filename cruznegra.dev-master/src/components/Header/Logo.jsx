import React from "react";
import Links, { LinksMobile } from "./Links";
import LogoImage from "../../assets/CruzNegra.svg"; // Ruta de tu imagen

const LogoComponent = ({ onMouseEnter, onMouseLeave, menuVisible }) => {
  return (
    <div
      className="relative flex items-center justify-start w-1/2 cursor-pointer lg:mx-10 p-2 lg:p-0"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img
        src={LogoImage} // URL de tu imagen
        alt="Logo"
        className="img-rotate w-8 h-8 sm:w-12 sm:h-12 m-1" // Más pequeño en móviles
      />

      {/* Menú desplegable en pantallas grandes */}
      <div className="hidden lg:block">{menuVisible && <Links />}</div>
      <div className="lg:hidden flex items-center w-full ml-4">
        <LinksMobile />
      </div>
    </div>
  );
};

export default LogoComponent;
