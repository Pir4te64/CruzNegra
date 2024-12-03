import { useState } from "react";
import HeaderText from "./HeaderText";
import HeaderImg from "./HeaderImg";
import LogoComponent from "./Logo";
import "./Header.css";
const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <div
      id="top"
      className="text-white rounded-[20px] border-2 border-white m-2 p-2 sm:m-3 sm:p-3 md:m-5 md:p-5 bg-header"
    >
      {/* Main Container */}
      <div className="lg:flex lg:items-center lg:justify-between flex flex-col h-screen lg:h-auto justify-between items-center ">
        <div className="w-full mb-4">
          {/* Contenedor de navbar y texto con botón */}
          <div className="flex items-center w-full ">
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
        <HeaderImg />
        <div className="lg:hidden flex flex-col items-center w-full">
          <HeaderText />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
