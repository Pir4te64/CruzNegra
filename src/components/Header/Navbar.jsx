import { useState } from "react";
import HeaderText from "./HeaderText";
import HeaderImg from "./HeaderImg";
import LogoComponent from "./Logo";
import "./Header.css";
import fondoImg from "/fondocruznegra1.png";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div
      id="top"
      className="text-white rounded-[20px] border-2 border-white m-2 p-2 sm:m-3 sm:p-3 md:m-5 md:p-5 min-h-[92vh] flex flex-col justify-center scale-95 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${fondoImg})` }}
    >
      {/* Navbar: logo y menú arriba a la izquierda */}
      <div className="absolute top-8 left-0 z-30 hidden lg:block">
        <LogoComponent
          onMouseEnter={() => setMenuVisible(true)}
          onMouseLeave={() => setMenuVisible(false)}
          menuVisible={menuVisible}
        />
      </div>
      {/* Texto y botones arriba a la derecha en desktop */}
      <div className="hidden lg:block absolute top-8 right-12 z-30">
        <HeaderText />
      </div>
      {/* Logo centrado y texto en móvil */}
      <div className="flex flex-col items-center justify-center h-full w-full relative z-10">
        <HeaderImg />
        {/* En móvil, el texto y botones debajo del logo */}
        <div className="block lg:hidden mt-6 w-full flex justify-center">
          <HeaderText />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
