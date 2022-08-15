import Experience from "@components/experience/Experience";
import Technology from "@components/technology/Technology";
import React from "react";

function AboutMe() {
  return (
    <div className="aboutMe-main group">
      <div className="flex flex-col gap-10">
        <div className="text-5xl font-Rubik">
          I'm Randolph, A full-stack software developer
        </div>
        {/* <div className="font-Montserrat text-zinc-900 self-center">
        <div className="flex p-1 flex-col  rounded-xl items-center text-zinc-500">
          <div className="text-xl font-extrabold">
            with{" "}
            <span className="text-red-400">
              {" "}
              <Moment diff="2014-08-14" unit="years"></Moment>
            </span>
            <span className="text-red-400">+ years</span> of experience.
          </div>
        </div>
      </div> */}
        <div>
          <Experience />
        </div>
      </div>
      {/* <div className="flex-1">
        <Technology />
      </div> */}
    </div>
  );
}

export default AboutMe;
