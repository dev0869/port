
import React, { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  useFrame(({ clock }) => {
    computer.scene.rotation.y = Math.sin(clock.elapsedTime * 0.5) * 0.1;
  });

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, 1, -1] : [0, -1.25, -1.5]}
        rotation={[-0.01, -0.2, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 400px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "100%", display: isMobile ? "flex" : "flex", justifyContent: "center", alignItems: "center" }}>
      <Canvas style={{ width: "500px", height: "450px", maxWidth: "100%", maxHeight: "100%" }} frameloop='demand' shadows dpr={[1, 2]} camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls autoRotate autoRotateSpeed={0.1} enableZoom={true} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
          <Computers isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
