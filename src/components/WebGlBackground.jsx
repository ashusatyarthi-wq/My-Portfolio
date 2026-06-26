import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Environment, Float } from '@react-three/drei';

function LiquidMetalShape() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={1.8}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color="#a3a3a3"
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0}
          metalness={1}
          roughness={0.1}
          distort={0.4}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}

export default function WebGlBackground() {
  return (
    <div className="fixed inset-0 z-0 bg-[#050505]">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#d4d4d4" />
        <pointLight position={[0, 5, 0]} intensity={1} color="#ffffff" />
        <LiquidMetalShape />
      </Canvas>
    </div>
  );
}
