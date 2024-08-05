import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [3, 4, 6], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={3}>
          <Experience />
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
