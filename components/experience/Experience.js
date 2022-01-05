import React, { useState } from "react";

const Experience = () => {
  const expDetails = [
    {
      companyName: "J.P MORGAN",
      cssClassName: "jpmorgan",
      designation: " Associate Software Developer",
      duration: "2019 - Current",
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
    <div className="experience-main">
      {experience.map((details, index) => (
        <div key={"experienceList" + index} className="flex pb-8 ">
          <div className="flex flex-col text-slate-50">
            <div className={details.cssClassName}>
              {/* <h1 className="underline">{details.companyName}</h1> */}
            </div>
            <div className="text-sm text-slate-400">{details.duration}</div>
            <div className="text-lg text-slate-400">{details.designation}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
