"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function Tap() {
  const group = useRef<THREE.Group>(null!);
  const handle = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    // Subtle floating animation
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t * 0.3) * 0.3;
    group.current.position.y = Math.sin(t * 0.8) * 0.02;
    if (handle.current) handle.current.rotation.z = Math.sin(t * 1.2) * 0.2;
  });

  return (
    <group ref={group} position={[0, 0.28, 0]}>
      {/* Tap body */}
      <mesh castShadow position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.04, 0.05, 0.22, 32]} />
        <meshPhysicalMaterial metalness={1} roughness={0.2} color="#c9c9c9" />
      </mesh>
      {/* Neck */}
      <mesh castShadow position={[0, 0.23, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 0.2, 32]} />
        <meshPhysicalMaterial metalness={1} roughness={0.2} color="#d4d4d4" />
      </mesh>
      {/* Spout */}
      <mesh castShadow position={[0.1, 0.23, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.07, 0.017, 32, 100, Math.PI / 1.25]} />
        <meshPhysicalMaterial metalness={1} roughness={0.18} color="#e5e5e5" />
      </mesh>
      {/* Handle */}
      <mesh ref={handle} castShadow position={[0, 0.3, 0]}> 
        <boxGeometry args={[0.11, 0.02, 0.03]} />
        <meshPhysicalMaterial metalness={1} roughness={0.18} color="#e8e8e8" />
      </mesh>
    </group>
  );
}

function Basin() {
  return (
    <group position={[0, 0, 0]}>
      {/* Bowl */}
      <mesh receiveShadow castShadow position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.55, 0.6, 0.2, 64]} />
        <meshPhysicalMaterial color="#ffffff" roughness={0.2} metalness={0} clearcoat={1} clearcoatRoughness={0.05} />
      </mesh>
      {/* Inner bowl */}
      <mesh position={[0, 0.14, 0]}>
        <cylinderGeometry args={[0.5, 0.55, 0.22, 64]} />
        <meshPhysicalMaterial color="#f7f7f7" side={THREE.BackSide} roughness={0.25} />
      </mesh>
      {/* Countertop */}
      <mesh receiveShadow position={[0, -0.05, 0]}>
        <boxGeometry args={[1.6, 0.04, 0.9]} />
        <meshPhysicalMaterial color="#eae7e2" roughness={0.6} />
      </mesh>
    </group>
  );
}

export default function Bathroom3D({ className = "h-[420px] w-full" }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas shadows camera={{ position: [1.6, 0.9, 2.2], fov: 45 }}>
        {/* Ambient + key lights */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[2.5, 2.5, 2.5]} intensity={1.2} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
        <directionalLight position={[-3, 1.5, -1.5]} intensity={0.4} />

        <Basin />
        <Tap />

        <ContactShadows position={[0, -0.06, 0]} opacity={0.35} scale={5} blur={1.5} far={2} />
        <Environment preset="city" />
        <OrbitControls enablePan={false} minDistance={1.2} maxDistance={3.5} />
      </Canvas>
    </div>
  );
}
