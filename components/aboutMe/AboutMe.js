import React from "react";

function AboutMe() {
  return (
    <div className="aboutMe-main group">
      <div className="text-5xl font-PatuaOne  ">
        I'm Randolph, A{" "}
        <span className="group-hover:text-red-300">full-stack</span> software
        developer
      </div>
      <div className="font-Montserrat text-zinc-300 self-center">
        <div className="flex p-1 flex-col  rounded-xl items-center text-zinc-300">
          <div className="text-xl font-extrabold">
            with 7+ years of experience.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
