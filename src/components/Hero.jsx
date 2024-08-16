import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaCloudDownloadAlt } from "react-icons/fa";

gsap.registerPlugin();

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
        .fromTo(".btn-download", { y: -70, scale: 0.5, zIndex: 0 }, { y: 0, scale: 1, opacity: 1, duration: 2, zIndex: 30 });
    },
    { scope: main }
  );
  return (
    <section className="hero w-screen h-screen flex flex-col justify-center items-center" ref={main}>
      <div className="text overflow-hidden flex">
        <p className="concept font-soehne text-2xl leading-normal z-10">from concept</p>
        <p className="code font-soehne text-2xl leading-normal z-0 pl-2">to {code}</p>
      </div>
      <h1 className="title font-soehne text-2xl leading-normal tracking-wider bg-transparent p-1 z-10 font-bold">BAYU DARWANTO as WEBSITE DEVELOPER</h1>
      <div className="canvas absolute z-10">
        <Canvas shadows camera={{ position: [3, 0, 8], fov: 30 }}>
          <Experience />
        </Canvas>
      </div>
      <button type="button" className="btn-download flex items-center gap-5 bg-transparent mt-5 py-3 px-10 rounded-3xl text-black border-2 border-slate-950 font-soehne tracking-widest opacity-0 hover:cursor-pointer">
        <FaCloudDownloadAlt className="text-3xl" /> Download Resume
      </button>
    </section>
  );
}
