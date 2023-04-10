
import React, { useState, useEffect } from "react";
import Heromob from "./Heromob";
import Herodesktop from "./Herodesktop";

const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isDesktop ? (
      <Herodesktop/>
      ) : (
        <Heromob/>
      )}
    </div>
  );
};

export default Hero;
