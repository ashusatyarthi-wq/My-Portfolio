import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Environment, Float } from '@react-three/drei';

import * as THREE from 'three';

function LiquidMetalShape() {
  const meshRef = useRef();
  
  // Track previous pointer position to calculate speed for distortion
  const prevPointer = useRef({ x: 0, y: 0 });
  const materialRef = useRef();

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // 1. Base Rotation
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.05;

    // 2. Mouse Parallax Target
    const targetX = state.pointer.x * 0.5;
    const targetY = state.pointer.y * 0.5;

    // 3. Scroll Journey Target
    const scrollY = window.scrollY;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const scrollProgress = scrollY / maxScroll; // 0 to 1

    // Move in a gentle figure-8 or sine wave across the screen based on scroll
    const isMobile = window.innerWidth < 768;
    const amplitudeX = isMobile ? 0.6 : 1.5;
    const scrollOffsetX = Math.sin(scrollProgress * Math.PI * 4) * amplitudeX;
    const scrollOffsetY = Math.sin(scrollProgress * Math.PI * 2) * 1.0;

    // Final target position
    const finalX = targetX + scrollOffsetX;
    const finalY = targetY + scrollOffsetY;

    // Smoothly interpolate position
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, finalX, 0.03);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, finalY, 0.03);

    // Dynamic Scale (shrinks slightly when scrolling through content)
    const targetScale = 1.8 - (Math.sin(scrollProgress * Math.PI) * (isMobile ? 0.3 : 0.5));
    meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.05));

    // 4. Dynamic Distortion based on mouse movement speed
    if (materialRef.current) {
      const dx = state.pointer.x - prevPointer.current.x;
      const dy = state.pointer.y - prevPointer.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);
      
      // Target distortion increases slightly when mouse moves fast
      const targetDistort = 0.4 + Math.min(speed * 2, 0.3);
      materialRef.current.distort = THREE.MathUtils.lerp(materialRef.current.distort, targetDistort, 0.1);
      
      prevPointer.current.x = state.pointer.x;
      prevPointer.current.y = state.pointer.y;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={1.8}>
        <sphereGeometry args={[1, 128, 128]} />
        <MeshDistortMaterial
          ref={materialRef}
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
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#d4d4d4" />
        
        <LiquidMetalShape />
        
        <Suspense fallback={null}>
          <Environment files={`${import.meta.env.BASE_URL}city.hdr`} />
        </Suspense>
      </Canvas>
    </div>
  );
}
