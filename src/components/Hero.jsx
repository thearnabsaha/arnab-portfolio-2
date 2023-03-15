import { motion } from "framer-motion";

import { styles } from "../styles";
import "./main.css";

const Hero = () => {
  return (
    <section
      className={`relative w-full h-screen mx-auto`}
      style={{ overflowX: "hidden" }}
    >
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="sm:block hidden">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Arnab</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I will convert your paper-ball, <br className="sm:block hidden" />
            into an aero-plane
          </p>
          <p
            className={`${styles.heroSubText} mt-2`}
            style={{ fontSize: "20px", opacity: 0.6 }}
          >
            Web Developer
          </p>
        </div>

        <div className="sm:hidden">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Arnab</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100`}
            style={{ fontSize: "25px" }}
          >
            I will convert your paper-ball, <br className="sm:block hidden" />
            into an aero-plane
          </p>
          <p
            className={`${styles.heroSubText} mt-2`}
            style={{ fontSize: "15px", opacity: 0.6 }}
          >
            WEb Developer
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}
      <img
        src={
          "https://firebasestorage.googleapis.com/v0/b/frontlancer.appspot.com/o/plane.png?alt=media&token=4508b2e7-5e87-4b50-ba6c-acd66d01f2ca"
        }
        className="heroImageSecond"
      />
      <img
        src={
          "https://firebasestorage.googleapis.com/v0/b/frontlancer.appspot.com/o/tech%2Faeroplane.png?alt=media&token=103e82f7-78e8-454f-9664-308d628c882c"
        }
        className="heroImage"
      />
      <img
        src={
          "https://firebasestorage.googleapis.com/v0/b/frontlancer.appspot.com/o/plane.png?alt=media&token=4508b2e7-5e87-4b50-ba6c-acd66d01f2ca"
        }
        className="heroImageThird"
      />

      <div
        className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center heroMotion"
        style={{ flexDirection: "column" }}
      >
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
        <p
          className={`${styles.heroSubText} mt-2`}
          style={{ fontSize: "12px", opacity: 0.6 }}
        >
          {"React, JS, UI/UX and Figma"}
        </p>
      </div>
    </section>
  );
};

export default Hero;
