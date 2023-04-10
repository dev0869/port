
import React, { useEffect, useRef } from "react";
import './index.css'
const MorphingText = () => {
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  // The strings to morph between. You can change these to anything you want!
  const texts = [
    "Why",
    "is",
    "this",
    "so",
    "satisfying",
    "to",
    "watch?",
  ];

  // Controls the speed of morphing.
  const morphTime = 1;
  const cooldownTime = 1.25;

  let textIndex = texts.length - 1;
  let time = new Date();
  let morph = 0;
  let cooldown = cooldownTime;

  function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
      cooldown = cooldownTime;
      fraction = 1;
    }

    setMorph(fraction);
  }

  // function setMorph(fraction) {
  //   text2Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  //   text2Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  //   fraction = 1 - fraction;
  //   text1Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
  //   text1Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

  //   text1Ref.current.textContent = texts[textIndex % texts.length];
  //   text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
  // }
  function setMorph(fraction) {
    if (!text1Ref.current || !text2Ref.current) {
      return;
    }
  
    text2Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    text2Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
  
    fraction = 1 - fraction;
    text1Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    text1Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
  
    text1Ref.current.textContent = texts[textIndex % texts.length];
    text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
  }
  
  function doCooldown() {
    morph = 0;
  
    if (text2Ref.current) {
      text2Ref.current.style.filter = "";
      text2Ref.current.style.opacity = "100%";
    }
  
    if (text1Ref.current) {
      text1Ref.current.style.filter = "";
      text1Ref.current.style.opacity = "0%";
    }
  }
  
  useEffect(() => {
    const elts = {
      container: containerRef.current,
      text1: text1Ref.current,
      text2: text2Ref.current,
    };

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];

    // Animation loop, which is called every frame.
    function animate() {
      requestAnimationFrame(animate);

      let newTime = new Date();
      let shouldIncrementIndex = cooldown > 0;
      let dt = (newTime - time) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex++;
        }

        doMorph();
      } else {
        doCooldown();
      }
    }

    animate();
  }, []);

  return (<>
    <div id="container" ref={containerRef}>
      <span id="text1" ref={text1Ref}></span>
      <span id="text2" ref={text2Ref}></span>
    </div>
    <svg id="filters">
      <defs>
        <filter id="threshold">
          <feColorMatrix in="SourceGraphic"
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 255 -140" />
        </filter>
      </defs>
    </svg>
  </>

  );
};

export default MorphingText;
