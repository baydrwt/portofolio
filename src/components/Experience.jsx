import React, { useRef } from "react";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Jet } from "./Jet";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin();

export const Experience = () => {
  const main = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".batas",
        start: "-50 center",
        end: "105% bottom",
        scrub: true,
        // markers: true,
      },
    });

    tl.to(".canvas", { y: 150, ease: "slow(0.5, 0.8, true)" }).to(".canvas", { y: 300, ease: "slow(0.5, 0.8, true)" });
  });
  return (
    <>
      <OrbitControls enableZoom={false} enableRotate={false} />
      <Environment preset="sunset" blur={0.4} />
      <Float floatIntensity={0.045} speed={1} floatingRange={[1, 3]}>
        <Jet className="jet" scale={0.08} position={[-4.8, -1, -1.7]} rotation={[0.15, -0.2, -0.2]} ref={main} />
      </Float>
      <pointLight position={[-10, 10, 2]} intensity={1} />
    </>
  );
};
