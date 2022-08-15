import React, { useState } from "react";
import Moment from "react-moment";
const Experience = () => {
  const expDetails = [
    {
      companyName: "J.P MORGAN",
      cssClassName: "jpmorgan",
      designation: " Associate Software Developer",
      duration: "2019 - current",
      noOfYears: "3y",
    },
    {
      companyName: "CITIUS TECH",
      cssClassName: "citiustech",
      designation: "Senior Software Developer",
      duration: "2017 - 2019",
      noOfYears: "1.5y",
    },
    {
      companyName: "CAPGEMINI",
      cssClassName: "capgemini",
      designation: "Senior Software Developer",
      duration: "2014 - 2017",
      noOfYears: "3y",
    },
  ];
  const [experience, setExperience] = useState(expDetails);

  return (
    <div className="flex divide-x-2">
      <div className="flex-1">
        <div className="flex flex-col align-middle items-end mr-8 flex-grow text-4xl font-Rubik">
          <div className="flex flex-col">
            <div className="items-center">
              <span>
                {" "}
                0<Moment diff="2014-08-14" unit="years"></Moment>+
              </span>
            </div>

            <div className="text-sm font-Rubik">Years Of Experience</div>
          </div>
        </div>
      </div>
      <div className="experience-main font-Rubik flex-1">
        {experience.map((details, index) => (
          <div
            key={"experienceList" + index}
            className="flex flex-col items-start ml-8 "
          >
            <div className={details.cssClassName}></div>
            <div className="text-sm text-zinc-900">{details.duration}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
