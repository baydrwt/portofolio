import React from "react";
import { useOutletContext } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

export default function ExperienceInfo() {
  const { currentExperience } = useOutletContext();

  return (
    <div className="experience-information absolute right-6 bottom-6 h-2/4 w-2/5 border-2 border-black rounded-tl-3xl rounded-br-3xl p-3">
      <h3 className="font-soehne ">{currentExperience.position}</h3>
      <h4 className="text-sm font-extralight italic pb-2 border-b-2 flex items-center">
        <a href={`${currentExperience.profile}`} className="pr-1">
          <FaLinkedin />
        </a>
        | {currentExperience.date_start} - {currentExperience.date_end}
      </h4>
      <p className="text-sm text-justify">{currentExperience.description}</p>
    </div>
  );
}
