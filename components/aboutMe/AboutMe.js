import React from "react";

function AboutMe() {
  return (
    <div className="aboutMe-main group">
      <div className="text-5xl font-PatuaOne  ">
        I'm Randolph, A <span className="text-red-400">full-stack</span>{" "}
        software developer
      </div>
      <div className="font-Montserrat text-zinc-900 self-center">
        <div className="flex p-1 flex-col  rounded-xl items-center text-zinc-500">
          <div className="text-xl font-extrabold">
            with <span className="text-red-400">7+ years</span> of experience.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
