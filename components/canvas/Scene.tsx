"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment } from "@react-three/drei";
import ToothModel from "./ToothModel";

export default function Scene() {
  return (
    <div className="fixed inset-0 w-full h-full z-[1] pointer-events-none select-none">
      <Canvas
        shadows
        dpr={[1, 2]} // Performance optimization: limit resolution to max 2x
        camera={{ position: [0, 0, 3.2], fov: 45 }}
        gl={{ 
          antialias: true, 
          alpha: true, 
          powerPreference: "high-performance",
          preserveDrawingBuffer: true 
        }}
      >
        {/* Soft Ambient lighting to highlight glass volumes */}
        <ambientLight intensity={0.4} />

        {/* Directional studio lights */}
        <directionalLight
          position={[5, 5, 4]}
          intensity={1.2}
          castShadow
          shadow-mapSize={[1024, 1024]}
          shadow-bias={-0.0001}
        />
        
        {/* Warm Golden Key Light to bounce off the gold accents */}
        <directionalLight 
          position={[-5, -2, 2]} 
          intensity={0.8} 
          color="#FFEAA7" 
        />
        
        {/* Fill light from behind */}
        <directionalLight 
          position={[0, 5, -5]} 
          intensity={0.6} 
          color="#DFE6E9" 
        />

        <Suspense fallback={null}>
          <ToothModel />
          
          {/* Dynamic environment lighting map */}
          <Environment preset="studio" />
        </Suspense>

        {/* Soft contact shadows beneath the model */}
        <ContactShadows
          position={[0, -1.0, 0]}
          opacity={0.35}
          scale={7}
          blur={2.4}
          far={1.6}
          color="#09090b"
        />
      </Canvas>
    </div>
  );
}
