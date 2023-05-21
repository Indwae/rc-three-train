import "./App.css";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment,MapControls,} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./sierra.gltf");
  return (
    <>
      <primitive object={gltf.scene} scale={10} />
    </>
  );
};

export default function App() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          <MapControls></MapControls>
          <Environment preset="studio" background />
        </Suspense>
      </Canvas>
    </div>
  );
}
