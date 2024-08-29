import { React, useState, Suspense, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Await } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function Journey(props) {
  const [isActive, setIsActive] = useState("circle1");
  const triggerRef = useRef(null);

  function JourneyInformation(experiences) {
    const experience = experiences.find((experience) => experience.identity === isActive);

    return (
      <>
        <h3 className="font-soehne">{experience.position}</h3>
        <h4 className="text-sm font-extralight italic pb-2 mb-2 border-b-2 flex items-center">
          <a href={`${experience.profile}`} target="blank_" className="pr-1">
            <FaLinkedin />
          </a>
          | {experience.date_start} - {experience.date_end}
        </h4>
        <p className="text-sm text-justify">{experience.description}</p>
      </>
    );
  }

  useGSAP(() => {
    gsap.timeline().fromTo(".box-journey", { y: 0, delay: 3 }, { y: -150, duration: 3 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".batas",
        start: "top bottom",
        end: "top 55%",
        scrub: 0.6,
        autoAlpha: 1,
        // markers: true,
      },
    });

    tl.fromTo(".box-journey", { y: -150 }, { y: -220, width: "75%", height: "75%", x: -140, ease: "slow(0.5, 0.8, true)" }).fromTo(
      ".experience-information",
      { x: 55, opacity: 0 },
      { opacity: 1, duration: 0.2, x: 0, ease: "slow(0.5, 0.8, true)" }
    );
  });

  function handleClick(e) {
    setIsActive(e.target.id);
  }

  return (
    <>
      <section className="batas h-screen w-full flex justify-center overflow-visible" ref={triggerRef}>
        <div className="box-journey border-4 rounded-3xl border-black w-1/4 h-2/4 relative flex justify-center items-end">
          <svg className="journey pt-3" width="100%" height="100%" viewBox="0 0 51 16" fill="none">
            <path id="mainPath" d="M0 15H6.5L15.5 8H25L31.5 1.5H43H51" stroke="black" strokeDasharray="100" strokeDashoffset="100" />
            <path
              id="circle1"
              d="M8.00001 14.5C8.00001 15.3284 7.32844 16 6.50001 16C5.67158 16 5.00001 15.3284 5.00001 14.5C5.00001 13.6716 5.67158 13 6.50001 13C7.32844 13 8.00001 13.6716 8.00001 14.5Z"
              fill={isActive === "circle1" ? "red" : "black"}
              opacity="0"
              onClick={(e) => handleClick(e)}
            />
            <circle id="circle2" cx="15.5" cy="7.5" r="1.5" fill={isActive === "circle2" ? "red" : "black"} opacity="0" onClick={(e) => handleClick(e)} />
            <circle id="circle3" cx="31.5" cy="1.5" r="1.5" fill={isActive === "circle3" ? "red" : "black"} opacity="0" onClick={(e) => handleClick(e)} />
            <path
              id="circle4"
              d="M45 1.5C45 2.32843 44.3284 3 43.5 3C42.6716 3 42 2.32843 42 1.5C42 0.671573 42.6716 0 43.5 0C44.3284 0 45 0.671573 45 1.5Z"
              fill={isActive === "circle4" ? "red" : "black"}
              opacity="0"
              onClick={(e) => handleClick(e)}
            />
          </svg>
          <p className={`sman absolute left-6 bottom-48 text-lg font-bold opacity-0 ${isActive === "circle1" ? "text-red-700" : "text-black"}`}>SMAN 97 Jakarta</p>
          <p className={`univ absolute left-36 bottom-72 text-lg font-bold opacity-0 ${isActive === "circle2" ? "text-red-700" : "text-black"}`}>Universitas Gunadarma</p>
          <p className={`magang1 absolute right-64 top-16 pr-2 text-lg font-bold opacity-0 ${isActive === "circle3" ? "text-red-700" : "text-black"}`}>Hashmicro</p>
          <p className={`magang2 absolute right-2 top-16 text-lg font-bold opacity-0 ${isActive === "circle4" ? "text-red-700" : "text-black"}`}>Trans Retail Indonesia</p>
          <h2 className="experience absolute font-soehne left-6 top-6 text-2xl font-bold opacity-0">Experience</h2>
          <div className="experience-information absolute right-6 bottom-6 h-2/4 w-2/5 border-2 border-black rounded-tl-3xl rounded-br-3xl p-3">
            <Suspense fallback={<h2>Loading Data</h2>}>
              <Await resolve={props.experiences}>{JourneyInformation}</Await>
            </Suspense>
          </div>
        </div>
      </section>
    </>
  );
}
