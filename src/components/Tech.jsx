
import React, { useState } from "react";
import "./index.css";
import Tilt from "react-tilt";
import { StarsCanvas } from "./canvas";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import Effect from "./Effect";
import TextSpan from "./animatedletter/TextSpan";

const Tech = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const sentence1 = "skills what i have".split("");
  const sentence2 = "Skills".split("");
  const handleSkillCardMouseEnter = (index) => {
    setHoveredSkill(index);
  };

  const handleSkillCardMouseLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <div id="skills">
      <motion.div className="text-center"
        initial={{
          y: 40,
          opacity: 0,
        }}
        whileInView={{ y: 0, opacity: 5 }}
        viewport={{
          amount: 1,
          margin: '-5%',
        }}
        transition={{
          duration: 0.4,
        }}
        style={{
          marginTop: -20,
        }}
      >
        <Effect />

        <p className={`${styles.sectionSubText} `}>
          {sentence1.map((letter, index) => {
            return (
              <TextSpan key={index} data={`${styles.animatext1p}`} >{letter === " " ? "\u00A0 " : letter}</TextSpan>
            )
          })}
        </p>
        <h2 className={`${styles.sectionHeadText}des`}>
          {sentence2.map((letter, index) => {
            return (
              <TextSpan key={index} data={`${styles.animatextmain}`} >{letter === " " ? "\u00A0" : letter}</TextSpan>
            )
          })}
        </h2>
      </motion.div>



      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (


          <div >
            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}

            >

              <div
                className="skillContainer"
                key={technology.name}
                onMouseEnter={() => handleSkillCardMouseEnter(index)}
                onMouseLeave={handleSkillCardMouseLeave}
              >
                <div
                  className={`skillCard ${hoveredSkill === index ? "hovered" : ""}`}
                  style={{
                    backgroundColor: hoveredSkill === index ? "transparent" : "",
                    fontWeight: hoveredSkill === index ? "500" : "",

                  }}
                >
                  <img src={technology.icon}
                    alt="" />
                  <p
                    className={`skillname ${hoveredSkill === index ? "hovered" : ""}`}
                    style={{
                      backgroundColor: hoveredSkill === index ? technology.color : "",
                    }}
                  >
                    {technology.name}
                  </p>
                </div>
              </div>

            </Tilt>

          </div>
        ))}
        <div className='block md:hidden'>
          <StarsCanvas />
        </div>
      </div>

    </div>
  );
};

export default SectionWrapper(Tech, "");

