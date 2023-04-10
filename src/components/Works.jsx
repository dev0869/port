import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import Effect from './Effect'
import { styles } from "../styles";
import { github } from "../assets";
import { StarsCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import TextSpan from "./animatedletter/TextSpan";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_code_link
}) => {
  return (
    <div onClick={() => window.open(live_code_link, "_blank")}  >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          transition: true,
          easing: "cubic-bezier(.03,.98,.52,.99)",
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full '
      >

        <div  className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div   className='absolute inset-0 flex justify-between m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='hover:scale-125 transition black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />

            </div>
            <div
              onClick={() => window.open(live_code_link, "_blank")}
              className=' hover:scale-125 transition black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <p className="text-white">live</p>
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  const sentence = " Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.".split(" ");
  const sentence1 = "My Works".split("");
  const sentence2 = "Projects".split("");




  return (
    <>
      <div id="projects">
        <motion.div className="text-center"
          initial={{
            y: 40,
            opacity: 0,
          }}
          whileInView={{ y: 0, opacity: 1 }}
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
          <p className={`${styles.sectionSubText} text-center `}>
            {sentence1.map((letter, index) => {
              return (
                <TextSpan key={index} data={`${styles.animatext1p}`} >{letter === " " ? "\u00A0" : letter}</TextSpan>
              )
            })}

          </p>
          <h2 className={`${styles.sectionHeadText} des text-center`}>
            {sentence2.map((letter, index) => {
              return (
                <TextSpan key={index} data={`${styles.animatextmain}`}  >{letter === " " ? "\u00A0" : letter}</TextSpan>
              )
            })}
          </h2>

        </motion.div>

        <div className='w-full flex justify-center'>
          <p

            className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] text-center justify-center'
          >
            {sentence.map((letter, index) => {
              return (
                <TextSpan key={index} data={`${styles.animatext}`} >{letter === " " ? "\u00A0" : letter}</TextSpan>
              )
            })}
          </p>
        </div>

        <div className='mt-20 flex flex-wrap gap-7 justify-center'>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
        <div className='block md:hidden'>
          <StarsCanvas />
        </div>
      </div>

    </>
  );
};

export default SectionWrapper(Works, "");
