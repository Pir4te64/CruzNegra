import { useState } from "react";
import HeaderText from "./HeaderText";
import HeaderImg from "./HeaderImg";
import LogoComponent from "./Logo";
import "./Header.css";
import fondoImg from "/fondocruznegra1.png";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  return (
    <div
      id="top"
      className="text-white rounded-[20px] border-2 border-white m-2 p-2 sm:m-3 sm:p-3 md:m-5 md:p-5 min-h-[92vh] flex flex-col justify-center scale-95 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${fondoImg})` }}
    >
      {/* Selector de idioma arriba a la derecha SOLO en mobile */}
      <div className="absolute top-4 right-4 z-40 lg:hidden">
        <button
          onClick={toggleLanguage}
          className="px-4 py-2 text-sm rounded-md border-2 border-white text-white hover:bg-white hover:text-black_cruznegra transition-all shadow-md"
        >
          {i18n.language === "es" ? "EN" : "ES"}
        </button>
      </div>
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
      {/* Mobile y Desktop: Logo grande y texto centrados */}
      <div className="flex flex-col items-center justify-center h-full w-full relative z-10">
        <div className="w-full flex flex-col items-center">
          <HeaderImg />
          {/* Solo en mobile: texto principal y CTA */}
          <div className="lg:hidden w-full flex flex-col items-center">
            <h1 className="text-md font-normal mt-6 mb-2 leading-5 text-center px-4">
              {t("header_text")}
            </h1>
            <div className="w-full flex justify-center">
              <a
                href="#form"
                type="button"
                className="bg-white text-black_cruznegra px-4 py-2 text-lg rounded-md border-2 border-transparent hover:bg-transparent hover:text-white hover:border-white transition-all font-semibold shadow-md"
              >
                {t("lets_talk")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
