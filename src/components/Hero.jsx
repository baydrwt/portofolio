import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { trackButton } from "../api.js";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const main = useRef();
  const code = "<Code />";

  useGSAP(
    () => {
      gsap
        .timeline()
        .fromTo(".code", { opacity: 0 }, { opacity: 0 })
        .fromTo(".title", { scale: 0.3, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.5 })
        .fromTo(".canvas", { x: "-50vw", y: "-80vh" }, { x: 0, y: 0, duration: 1.2 }, "<")
        .fromTo(".concept", { x: 55 }, { x: 50 })
        .fromTo(".concept", { y: 45, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
        .to(".concept", { x: 0, duration: 0.7 })
        .fromTo(".code", { x: -100 }, { x: 0, opacity: 1, duration: 1 })
        .fromTo(".btn-download", { y: -70, scale: 0.5, zIndex: 0 }, { y: 0, scale: 1, opacity: 1, zIndex: 30, duration: 0.5 }, "<");
    },
    { scope: main }
  );

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".batas",
        start: "top bottom",
        end: "top 52%",
        scrub: 1.5,
        autoAlpha: 1,
      },
    });
    tl.to(".btn-download", { paddingLeft: 25, paddingRight: 25, ease: "slow(0.5, 0.8, true)" })
      .to(".btn-text", { y: -20, opacity: 0, display: "none", ease: "slow(0.5, 0.8, true)" })
      .to(".title", { y: 50, scale: 0.3, opacity: 0, ease: "slow(0.5, 0.8, true)" })
      .to(".text", { y: 80, opacity: 0, delay: 0.5, ease: "slow(0.5, 0.8, true)" })
      .to(".btn-download", { opacity: 0, ease: "slow(0.5, 0.8, true)" })
      .to(".btn-download", { position: "fixed", bottom: 50, opacity: 1, backgroundColor: "white", zIndex: 99, ease: "slow(0.5, 0.8, true)" })
      .fromTo(".experience", { y: -55 }, { opacity: 1, duration: 0.2, y: 0 })
      .to("#mainPath", { strokeDashoffset: 0, duration: 1 })
      .to("#circle1", { opacity: 1, duration: 0.2 })
      .fromTo(".sman", { y: 50 }, { opacity: 1, duration: 0.2, y: 0 })
      .to("#circle2", { opacity: 1, duration: 0.2 })
      .fromTo(".univ", { y: 50 }, { opacity: 1, duration: 0.2, y: 0 })
      .to("#circle3", { opacity: 1, duration: 0.2 })
      .fromTo(".magang1", { y: 50 }, { opacity: 1, duration: 0.2, y: 0 })
      .to("#circle4", { opacity: 1, duration: 0.2 })
      .fromTo(".magang2", { y: 50 }, { opacity: 1, duration: 0.2, y: 0 });
  });

  return (
    <section className="hero w-screen h-screen flex flex-col justify-center items-center" ref={main}>
      <div className="text overflow-hidden flex text-lg font-soehne leading-normal sm:text-base md:text-2xl">
        <p className="concept z-10">from concept</p>
        <p className="code z-0 pl-2">to {code}</p>
      </div>
      <h1 className="title font-soehne text-xl leading-normal text-center bg-transparent p-1 z-10 font-bold sm:text-lg xs:w-2/3 md:text-2xl md:tracking-wider">
        BAYU DARWANTO <span className="block md:inline">as</span> WEBSITE DEVELOPER
      </h1>
      <div className="canvas absolute">
        <Canvas shadows camera={{ position: [3, 0, 8], fov: 30 }}>
          <Experience />
        </Canvas>
      </div>
      <a
        href="/portofolio/CV BAYU DARWANTO.pdf"
        download="CV BAYU DARWANTO.pdf"
        type="button"
        className="btn-download flex items-center text-xs gap-2 bg-transparent mt-5 py-3 px-3 rounded-3xl text-black border-2 border-slate-950 font-soehne tracking-widest opacity-0 md:px-10 md:gap-5 md:text-lg hover:cursor-pointer"
        onClick={() => trackButton()}
      >
        <FaCloudDownloadAlt className="text-xl md:text-3xl" />{" "}
        <span className="btn-text" id="cvButton">
          Download Resume
        </span>
      </a>
    </section>
  );
}
