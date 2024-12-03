import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true, // Habilita el scroll suave
      smoothMobile: true, // Opcional para móviles
      inertia: 0.9, // Controla la inercia del movimiento (0.1 a 1)
    });

    return () => scroll.destroy();
  }, []);

  return (
    <div data-scroll-container className="overflow-hidden">
      {children}
    </div>
  );
};

export default SmoothScroll;
