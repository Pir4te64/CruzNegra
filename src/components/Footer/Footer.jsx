import React from "react";
import cruznegra from "../../assets/CruzNegra.svg";
import Formulario from "./Formulario";
import { useTranslation } from "react-i18next";
import OptimizedSpline from "./OptimizedSpline";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-black_cruznegra text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4">{t("footer_impact")}</h2>
          <p className="text-center mb-8">{t("footer_rights")}</p>
        </div>
        {/* Grid para formulario y spline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8">
          <div className="w-full flex justify-center">
            <Formulario />
          </div>
          <div className="w-full flex justify-center">
            <OptimizedSpline />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
