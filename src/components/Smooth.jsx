import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      smoothMobile: true,
      inertia: 0.9,
      multiplier: 1,
      lerp: 0.1,
      smartphone: {
        smooth: true,
        multiplier: 1
      },
      tablet: {
        smooth: true,
        multiplier: 1
      }
    });

    // Asegurarse de que el cursor se mantenga visible
    const handleMouseMove = () => {
      document.body.style.cursor = 'default';
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      scroll.destroy();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div data-scroll-container className="overflow-hidden">
      {children}
    </div>
  );
};

export default SmoothScroll;
