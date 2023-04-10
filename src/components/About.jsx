import React from "react";
import { motion } from "framer-motion";
import { StarsCanvas, ComputersCanvas } from "./canvas";
import Effect from "./Effect";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import TextSpan from "./animatedletter/TextSpan";
import { staggerContainer } from "../utils/motion";

const About = () => {
  const sentence = "As a final year BCA student at MDU University, I have gained valuable knowledge in frontend development, including proficiency in Html, Css, JavaScript, ReactJs etc. Additionally, I have a basic understanding of backend technologies such as Node.js, Express and MongoDb. I am dedicated to expanding my knowledge & skills in the field of Computer Applications.With a deep passion for staying up-to-date with the latest trends and advancements in web development, I am constantly seeking new challenges to further enhance my skills and make a positive impact in the field.".split(" ");
  const sentence1 = "let me know".split("");
  const sentence2 = "Introduction".split("");
  return (
    <>

      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto `} style={{ position: 'relative', zIndex: 9 }}
      >


        <div id="dev" >
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

            <p className={styles.sectionSubText}> {sentence1.map((letter, index) => {
              return (
                <TextSpan key={index} data={`${styles.animatext1p}`} >{letter === " " ? "\u00A0" : letter}</TextSpan>
              )
            })}</p>
            <h2 className={`${styles.sectionHeadText} des`}>         {sentence2.map((letter, index) => {
              return (
                <TextSpan key={index} data={`${styles.animatextmain}`} >{letter === " " ? "\u00A0 \u00A0" : letter}</TextSpan>
              )
            })}</h2>

          </motion.div>
          <div class='flex items-center lg:flex-row flex-col z-50'>
            <div >

              <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] z-auto text-left'
              >
                {sentence.map((letter, index) => {
                  return (
                    <TextSpan key={index} data={`${styles.animatext}`} >{letter === " " ? "\u00A0" : letter}</TextSpan>
                  )
                })}
                <br />
                <a href="/static/media/resume.535ea88774cafd6114b0.pdf" download="" class="btn2  mt-4">Download CV</a>

              </motion.p>
            </div>
            <ComputersCanvas />
            <div className='block md:hidden'>
              <StarsCanvas />
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
