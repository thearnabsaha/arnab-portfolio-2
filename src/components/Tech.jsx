import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-20 sm:flex hidden">
        {technologies.map((technology) => (
          <div
            className="w-28 h-28"
            key={technology.name}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="sm:block hidden">
              <BallCanvas icon={technology.icon} />
            </div>
            <p>{technology.name}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-12 sm:hidden">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "60px",
              width: "60px",
            }}
          >
            <div className="sm:hidden">
              <img src={technology.icon} />
            </div>
            <p>{technology.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
