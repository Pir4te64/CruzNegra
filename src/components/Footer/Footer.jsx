import React from "react";
import cruznegra from "../../assets/CruzNegra.svg";
import Formulario from "./Formulario";
import Spline from '@splinetool/react-spline';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer id="contact" className="z-50">
      <div className="w-full px-4 py-4 md:pt-5 " id="footer">
        <div className="max-w-full md:mx-16 grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
          {/* Columna Izquierda */}
          <div className="flex flex-col">
            <div className="p-4">
              <p className="text-white font-bold text-xl md:text-3xl mb-0 md:mb-4">
                {t('footer_impact')}
              </p>
              <div className="pt-5 md:pt-0 rounded-lg shadow-md flex flex-col justify-between">
                <div>
                  <ul className="space-y-10">
                    <li>
                      <a
                        href="mailto:contact@cruznegra.com"
                        className="text-white underline"
                      >
                        management@cruznegradev.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Spline Keyboard */}
            <div className="h-[300px] md:h-[400px] w-full">
              <Spline scene="https://prod.spline.design/hcgdSPnwmjPl4fxO/scene.splinecode" />
            </div>
          </div>
          {/* Formulario */}
          <div className="flex items-center justify-center h-auto md:min-h-screen">
            <Formulario />
          </div>
        </div>
        <div className="mt-10  w-full h-[150px] md:h-[329px] flex flex-col">
          {/* Contenido superior: Logo y Links */}
          <div className="flex flex-row items-center justify-between md:mx-16  h-full px-4">
            {/* Logo */}
            <a href="/" className="mb-4">
              <img
                src={cruznegra} // Reemplaza con la ruta de tu logo
                alt="CruzNegra Logo"
                className="h-10 w-auto"
              />
            </a>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-right md:text-left">
              <a
                href="https://www.instagram.com/cruznegra.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Línea divisoria y texto */}
          <div className="border-t border-white py-4">
            <p className="text-center text-white md:text-xl text-sm">
              © 2024 CruzNegra. {t('footer_rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
