import { Environment, Float, OrbitControls } from "@react-three/drei";

import { Jet } from "./Jet";

export const Experience = () => {
  return (
    <>
      <OrbitControls enableZoom={false} />
      <Float floatIntensity={2} speed={3}>
        <Jet scale={0.05} />
      </Float>
      <Environment preset="sunset" background blur={0.4} />
    </>
  );
};
