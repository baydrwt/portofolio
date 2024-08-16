import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Jet } from "./Jet";

export const Experience = () => {
  return (
    <>
      <OrbitControls enableZoom={false} enableRotate={false} />
      <Float floatIntensity={0.25} speed={1.6}>
        <Jet scale={0.07} className="jet" position={[-3.5, -1, 0]} rotation={[0.15, -0.2, -0.2]} />
      </Float>
      <pointLight position={[-10, 10, 2]} intensity={1} />
      <Environment preset="sunset" blur={0.4} />
    </>
  );
};
