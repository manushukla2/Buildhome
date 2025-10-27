'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

// Simple lathe bathtub shape built from a profile curve
function Bathtub(props: JSX.IntrinsicElements['mesh']) {
  const geometry = useMemo(() => {
    const points: THREE.Vector2[] = [];
    // Generate a curved profile that looks like a freestanding tub
    const height = 2.2;
    const rim = 1.0;
    const base = 0.55;
    for (let i = 0; i <= 20; i++) {
      const t = i / 20;
      // Ease curve for outside wall
      const radius = base + (rim - base) * Math.pow(t, 0.8);
      const y = -height / 2 + t * height;
      points.push(new THREE.Vector2(radius, y));
    }
    // Slight inward lip at the top
    points.push(new THREE.Vector2(rim * 0.95, height / 2 + 0.02));

    const lathe = new THREE.LatheGeometry(points, 64);
    lathe.computeVertexNormals();
    return lathe;
  }, []);

  return (
    <mesh geometry={geometry} {...props} castShadow receiveShadow>
      <meshPhysicalMaterial
        color="#ffffff"
        roughness={0.35}
        metalness={0.0}
        transmission={0}
        clearcoat={1}
        clearcoatRoughness={0.2}
      />
    </mesh>
  );
}

function Tap(props: JSX.IntrinsicElements['group']) {
  const handle = useRef<THREE.Mesh>(null!);
  const water = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (handle.current) handle.current.rotation.z = Math.sin(t * 2) * 0.35;
    if (water.current) water.current.scale.y = 0.8 + Math.sin(t * 6) * 0.2;
  });

  return (
    <group {...props}>
      {/* vertical post */}
      <mesh castShadow position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.8, 32]} />
        <meshPhysicalMaterial color="#bfc3c7" metalness={1} roughness={0.15} />
      </mesh>
      {/* horizontal spout */}
      <mesh rotation={[0, 0, Math.PI / 2]} position={[0.35, 0.7, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.7, 32]} />
        <meshPhysicalMaterial color="#e5e6e7" metalness={1} roughness={0.1} />
      </mesh>
      {/* outlet */}
      <mesh position={[0.68, 0.7, 0]} castShadow>
        <cylinderGeometry args={[0.045, 0.045, 0.12, 32]} />
        <meshPhysicalMaterial color="#e5e6e7" metalness={1} roughness={0.15} />
      </mesh>
      {/* handle */}
      <mesh ref={handle} position={[0, 0.9, 0]} castShadow>
        <torusGeometry args={[0.12, 0.03, 16, 64]} />
        <meshPhysicalMaterial color="#d4af37" metalness={0.9} roughness={0.2} />
      </mesh>
      {/* water stream */}
      <mesh ref={water} position={[0.68, 0.55, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.3, 16]} />
        <meshPhysicalMaterial color="#77c0ff" transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

export default function ThreeBathroom() {
  return (
    <div className="w-full h-[520px] rounded-xl overflow-hidden bg-[#0f0f0f]">
      <Canvas shadows camera={{ position: [4, 2.3, 4.5], fov: 45 }}>
        <color attach="background" args={[0.06, 0.06, 0.06]} />
        <hemisphereLight intensity={0.35} groundColor={new THREE.Color('#222')} />
        <spotLight
          position={[6, 8, 3]}
          angle={0.35}
          penumbra={0.5}
          intensity={2}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />

        {/* floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.1, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>

        {/* bathtub */}
        <Bathtub scale={1.2} position={[0, -0.2, 0]} />
        {/* faucet */}
        <Tap position={[-0.35, -0.2, 0]} />

        <ContactShadows
          position={[0, -1.05, 0]}
          opacity={0.45}
          scale={10}
          blur={2}
          far={1.5}
        />
        <Environment preset="city" />
        <OrbitControls enablePan={false} minDistance={3} maxDistance={7} />
      </Canvas>
    </div>
  );
}
