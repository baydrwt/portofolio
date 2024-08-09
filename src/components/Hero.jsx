import React from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";

export default function Hero() {
  return (
    <section className="w-full h-96 flex flex-col justify-center items-center">
      <p>Bayu Darwanto</p>
      <p>Introduction</p>
      <h1>Web Developer</h1>
      <div className="canvas absolute z-50">
        <Canvas shadows camera={{ position: [3, 2, 8], fov: 30 }}>
          <Experience />
        </Canvas>
      </div>
    </section>
  );
}
