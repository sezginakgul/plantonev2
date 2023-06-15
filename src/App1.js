import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const App = () => {
  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.01;
  });

  const onModelLoad = (object) => {
    object.traverse(function (child) {
      if (child.isMesh) {
        child.material.color.set(0xff0000); // Örneğin, modelin rengini kırmızı olarak ayarlayabilirsiniz
      }
    });
  };

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={modelRef}>
        <primitive object={new OBJLoader().load("./model.obj", onModelLoad)} />
      </mesh>
    </Canvas>
  );
};

export default App;
