import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { git, linkedin } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[150px] w-[142px]">
    <motion.div
      // variants={fadeIn("top", "spring", index * 0.2, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[120px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-8 h-8 object-contain"
        />

        <h3 className="text-white text-[15px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2
          className={styles.sectionHeadText}
          style={{ display: "flex", alignItems: "center" }}
        >
          Overview.{" "}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "10px",
              marginLeft: "auto",
            }}
          >
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/thearnabsaha/",
                  "_blank"
                )
              }
              className="black-gradient w-18 h-18 rounded-full flex justify-center items-center cursor-pointer"
              style={{ marginRight: "10px" }}
            >
              <img src={linkedin} className="w-18 h-12 object-cover" />
            </button>
            <div
              onClick={() =>
                window.open("https://github.com/TheArnabSaha", "_blank")
              }
              className="black-gradient w-18 h-18 rounded-full flex justify-center items-center cursor-pointer"
            >
              {" "}
              <img src={git} className="w-18 h-12 object-cover" />
            </div>
          </div>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in REACT and
        JAVASCRIPT, and expertise in frontend, frontend architecture and
        designing. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      {/* 
      <div className="sm:hidden mt-20 flex flex-wrap gap-10">
        {services.map(
          (service, index) =>
            !service.hide && (
              <ServiceCard key={service.title} index={index} {...service} />
            )
        )}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
