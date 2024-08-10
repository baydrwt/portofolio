import React from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";

export default function Hero() {
  const code = "<Code />";
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center">
      <p className="font-soehne text-2xl leading-normal">from concept to {code}</p>
      <p className="font-soehne text-2xl leading-normal"></p>
      <h1 className="font-soehne text-2xl leading-normal tracking-wider">BAYU DARWANTO as WEBSITE DEVELOPER</h1>
      <div className="canvas absolute z-10">
        <Canvas shadows camera={{ position: [3, 0, 8], fov: 30 }}>
          <Experience />
        </Canvas>
      </div>
    </section>
  );
}
