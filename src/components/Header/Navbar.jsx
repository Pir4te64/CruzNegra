import { useState } from "react";
import HeaderText from "./HeaderText";
import HeaderImg from "./HeaderImg";
import LogoComponent from "./Logo";
import Spline from '@splinetool/react-spline';
import "./Header.css";
const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <div
      id="top"
      className="text-white rounded-[20px] border-2 border-white m-2 p-2 sm:m-3 sm:p-3 md:m-5 md:p-5 bg-header min-h-[92vh] flex flex-col justify-center scale-95 relative overflow-hidden"
    >
      {/* Fondo Spline absoluto */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Spline scene="https://prod.spline.design/H9fXknZZbUdBDpU0/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Fondo y logo grande centrado */}
      <HeaderImg />
      {/* Main Container superpuesto */}
      <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none">
        <div className="lg:flex lg:items-center lg:justify-between flex flex-col flex-1 justify-between items-center w-full h-full pointer-events-auto">
          <div className="w-full mb-4 ">
            {/* Contenedor de navbar y texto con botón */}
            <div className="flex items-center w-full px-0 md:px-10 ">
              {/* Logo y menú desplegable en pantallas grandes */}
              <LogoComponent
                onMouseEnter={() => setMenuVisible(true)}
                onMouseLeave={() => setMenuVisible(false)}
                menuVisible={menuVisible}
              />
              {/* Texto con botón en pantallas grandes */}
              <div className="hidden lg:flex lg:items-center lg:justify-end w-1/2 px-8 py-8">
                <HeaderText />
              </div>
            </div>
          </div>
          <div className="lg:hidden flex flex-col items-center w-full">
            <HeaderText />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
