// src/Scene.js
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three"; // Import THREE here

function ImageIn3D() {
  const imageRef = useRef();
  const textureUrl = "https://tse1.mm.bing.net/th?id=OIP.7UaM0_ayvUPsbV5vAiqjuwHaEK&pid=Api&P=0&h=180";
  return (
    <mesh ref={imageRef} position={[0, 0, 0]}>
      <planeGeometry args={[5, 5]} /> {/* Adjust size of the image */}
      <meshStandardMaterial map={new THREE.TextureLoader().load(textureUrl)} />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <ImageIn3D />
      <OrbitControls />
    </Canvas>
  );
}