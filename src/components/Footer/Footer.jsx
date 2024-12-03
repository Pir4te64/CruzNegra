import React from "react";
import cruznegra from "../../assets/CruzNegra.svg";
const Footer = () => {
  return (
    <footer id="contact" className="z-50">
      <div className="w-full px-4 py-4 md:pt-5 " id="footer">
        <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
          {/* Primer Div */}
          <div className="p-4 rounded-lg shadow-md">
            <p className="text-white font-bold text-xl md:text-3xl mb-0 md:mb-4">
              Let's talk about the impact you’d like to make and blow your
              audience's collective mind.
            </p>
          </div>

          {/* Segundo Div */}
          <div className="p-4 rounded-lg shadow-md flex flex-col justify-between">
            <div>
              <ul className="space-y-5 md:space-y-10">
                <li>
                  <a
                    href="mailto:contact@cruznegra.com"
                    className="text-white underline"
                  >
                    contact@cruznegra.com
                  </a>
                </li>
                <li>
                  <a href="tel:+15550000000" className="text-white underline">
                    +1 (555) 000-0000
                  </a>
                </li>
                <li>
                  <a href="#link3" className="text-white underline">
                    123 Sample St, Posadas (Misiones) ARG
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Nueva Sección */}
        <div className="mt-10 w-full h-[150px] md:h-[329px] flex flex-col">
          {/* Contenido superior: Logo y Links */}
          <div className="flex flex-row items-center justify-between  h-full px-4">
            {/* Logo */}
            <a href="#" className="mb-4">
              <img
                src={cruznegra} // Reemplaza con la ruta de tu logo
                alt="CruzNegra Logo"
                className="h-10 w-auto"
              />
            </a>
            {/* Links */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
              <a
                href="https://instagram.com"
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
            <p className="text-center text-white text-sm">
              © 2024 CruzNegra. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
