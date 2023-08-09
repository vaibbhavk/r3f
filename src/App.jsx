import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Suspense } from "react";
import Loader from "./components/Loader";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
      <Suspense fallback={<Loader />}>
        <color attach="background" args={["#ececec"]} />
        <Experience />
      </Suspense>
    </Canvas>
  );
}

export default App;
