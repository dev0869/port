import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Effect from "./Effect";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import TextSpan from "./animatedletter/TextSpan";
import { StarsCanvas } from "./canvas";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className=''>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[100%] h-[100%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const sentence1 = "What I have done so far".split("");
  const sentence2 = "Education.".split("");
  return (
    <>
      <div id="education">
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

          <p className={`${styles.sectionSubText} text-center`}>
            {sentence1.map((letter, index) => {
              return (
                <TextSpan key={index} data={`${styles.animatext1p}`}  >{letter === " " ? "\u00A0" : letter}</TextSpan>
              )
            })}
          </p>
          <h2 className={`${styles.sectionHeadText} des text-center`}>
            {sentence2.map((letter, index) => {
              return (
                <TextSpan data={`${styles.animatext1}`} key={index} >{letter === " " ? "\u00A0" : letter}</TextSpan>
              )
            })}
          </h2>
        </motion.div>
        <div class='relative '>


          <div className='mt-10 flex flex-col'>
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={`experience-${index}`}
                  experience={experience}
                />
              ))}
            </VerticalTimeline>
          </div>
        </div>
        <div className='block md:hidden'>
          <StarsCanvas />
        </div>
      </div>

    </>
  );
};

export default SectionWrapper(Experience, "work");
