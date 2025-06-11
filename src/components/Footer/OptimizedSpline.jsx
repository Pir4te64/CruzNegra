import React, { Suspense, lazy, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// Lazy load del componente Spline
const Spline = lazy(() => import("@splinetool/react-spline"));

const OptimizedSpline = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    // Detectar si es dispositivo móvil
    const checkDevice = () => {
      const isMobile = window.innerWidth <= 1024;
      setIsDesktop(!isMobile);
    };

    // Verificar inicialmente
    checkDevice();

    // Agregar listener para cambios de tamaño de ventana
    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      // Pequeño delay para asegurar que el componente esté listo
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  if (!isDesktop) {
    return (
      <div className="w-full h-[300px] bg-black_cruznegra flex items-center justify-center">
        <img
          src="/CruzNegra_White_Logo.svg"
          alt="Cruz Negra Logo"
          className="w-32 h-32 opacity-50"
        />
      </div>
    );
  }

  return (
    <div ref={ref} className="w-full h-[300px]">
      {isVisible && (
        <Suspense
          fallback={
            <div className="w-full h-full bg-black_cruznegra flex items-center justify-center">
              <img
                src="/CruzNegra_White_Logo.svg"
                alt="Cruz Negra Logo"
                className="w-32 h-32 opacity-50 animate-pulse"
              />
            </div>
          }
        >
          <Spline
            scene="https://prod.spline.design/hcgdSPnwmjPl4fxO/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
        </Suspense>
      )}
    </div>
  );
};

export default OptimizedSpline;
