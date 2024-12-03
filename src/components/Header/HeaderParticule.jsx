import React, { useEffect } from "react";
import { img64 } from "./imagenbase64"; // Asegúrate de que img64 contenga el SVG en base64

const ParticleSliderComponent = () => {
  useEffect(() => {
    const init = () => {
      const isMobile =
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().indexOf("mobile") >= 0;
      const isSmall = window.innerWidth < 1000;

      const ps = new ParticleSlider({
        ptlGap: isMobile || isSmall ? 3 : 0,
        ptlSize: isMobile || isSmall ? 3 : 1,
        width: 1e9,
        height: 1e9,
      });

      const gui = new dat.GUI();
      gui
        .add(ps, "ptlGap")
        .min(0)
        .max(5)
        .step(1)
        .onChange(() => {
          ps.init(true);
        });
      gui
        .add(ps, "ptlSize")
        .min(1)
        .max(5)
        .step(1)
        .onChange(() => {
          ps.init(true);
        });
      gui.add(ps, "restless");
      gui.addColor(ps, "color").onChange((value) => {
        ps.monochrome = true;
        ps.setColor(value);
        ps.init(true);
      });

      const handleClick = () => ps.init(true);
      window.addEventListener("click", handleClick);

      return () => {
        window.removeEventListener("click", handleClick);
      };
    };

    const initParticleSlider = () => {
      const psScript = document.createElement("script");
      psScript.addEventListener("load", init, false);
      psScript.src =
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/23500/ps-0.9.js";
      psScript.setAttribute("type", "text/javascript");
      document.body.appendChild(psScript);
    };

    window.addEventListener("load", initParticleSlider, false);

    return () => {
      window.removeEventListener("load", initParticleSlider);
    };
  }, []);

  return (
    <div id="particle-slider">
      <div className="slides">
        <div className="slide" />
        <canvas></canvas>
      </div>
    </div>
  );
};

export default ParticleSliderComponent;
