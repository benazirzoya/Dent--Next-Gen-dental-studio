"use client";

import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ToothModel() {
  const groupRef = useRef<THREE.Group>(null);

  // Gentle floating animation on tick
  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Abstract floating motion when not aggressively scrolling
    const elapsedTime = state.clock.getElapsedTime();
    groupRef.current.position.y += Math.sin(elapsedTime * 1.5) * 0.0015;
    
    // Idle rotation
    groupRef.current.rotation.y += 0.003;
  });

  useEffect(() => {
    if (!groupRef.current) return;

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const target = groupRef.current;
    const mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 1024px)",
      isTablet: "(min-width: 768px) and (max-width: 1023px)",
      isMobile: "(max-width: 767px)"
    }, (context) => {
      const { isDesktop, isTablet, isMobile } = context.conditions as any;

      // Define responsive positions and scales
      // 1. Initial State (Hero Section): Visible at top-right to match the video tooth
      const initPos = isMobile ? { x: 0, y: 0.35, z: 0.1 } : (isTablet ? { x: 0.65, y: 0.3, z: 0 } : { x: 0.82, y: 0.45, z: 0 });
      const initScale = isMobile ? { x: 0.85, y: 0.85, z: 0.85 } : (isTablet ? { x: 0.95, y: 0.95, z: 0.95 } : { x: 1.1, y: 1.1, z: 1.1 });

      // 2. Showcase Section (next page after Hero)
      const showcasePos = { x: 0, y: -0.1, z: 0.8 };
      const showcaseScale = isMobile ? { x: 1.0, y: 1.0, z: 1.0 } : { x: 1.4, y: 1.4, z: 1.4 };

      // 3. Features Section
      const featuresPos = isMobile ? { x: 0, y: 0.15, z: 0.3 } : { x: -0.85, y: -0.2, z: 0.1 };
      const featuresScale = isMobile ? { x: 0.75, y: 0.75, z: 0.75 } : { x: 0.95, y: 0.95, z: 0.95 };

      // 4. Story Section
      const storyPos = isMobile ? { x: 0, y: -0.1, z: 0.2 } : { x: 0.8, y: 0, z: 0.2 };
      const storyScale = isMobile ? { x: 0.7, y: 0.7, z: 0.7 } : { x: 0.85, y: 0.85, z: 0.85 };

      // 5. Booking Section
      const bookingPos = { x: 0, y: -0.5, z: 0.6 };
      const bookingScale = { x: 0.75, y: 0.75, z: 0.75 };

      // Set initial values
      gsap.set(target.position, initPos);
      gsap.set(target.rotation, { x: 0.2, y: -0.5, z: 0.1 });
      gsap.set(target.scale, initScale);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
          invalidateOnRefresh: true,
        }
      });

      // 1. Rise and scale into Showcase (Hero -> Showcase)
      tl.to(target.position, {
        x: showcasePos.x,
        y: showcasePos.y,
        z: showcasePos.z,
        duration: 1.5,
      }, 0)
      .to(target.rotation, {
        x: 0.4,
        y: Math.PI * 2 - 0.5,
        z: -0.2,
        duration: 1.5,
      }, 0)
      .to(target.scale, {
        x: showcaseScale.x,
        y: showcaseScale.y,
        z: showcaseScale.z,
        duration: 1.5,
      }, 0);

      // 2. Move to features layout
      tl.to(target.position, {
        x: featuresPos.x,
        y: featuresPos.y,
        z: featuresPos.z,
        duration: 1.5,
      }, 1.5)
      .to(target.rotation, {
        x: 0.1,
        y: Math.PI * 2.8,
        z: 0.3,
        duration: 1.5,
      }, 1.5)
      .to(target.scale, {
        x: featuresScale.x,
        y: featuresScale.y,
        z: featuresScale.z,
        duration: 1.5,
      }, 1.5);

      // 3. Move to story layout
      tl.to(target.position, {
        x: storyPos.x,
        y: storyPos.y,
        z: storyPos.z,
        duration: 1.5,
      }, 3.0)
      .to(target.rotation, {
        x: -0.3,
        y: Math.PI * 3.6,
        z: -0.1,
        duration: 1.5,
      }, 3.0)
      .to(target.scale, {
        x: storyScale.x,
        y: storyScale.y,
        z: storyScale.z,
        duration: 1.5,
      }, 3.0);

      // 4. Move to booking layout
      tl.to(target.position, {
        x: bookingPos.x,
        y: bookingPos.y,
        z: bookingPos.z,
        duration: 1.5,
      }, 4.5)
      .to(target.rotation, {
        x: 0.5,
        y: Math.PI * 4.5,
        z: 0,
        duration: 1.5,
      }, 4.5)
      .to(target.scale, {
        x: bookingScale.x,
        y: bookingScale.y,
        z: bookingScale.z,
        duration: 1.5,
      }, 4.5);
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <group ref={groupRef} dispose={null}>
      {/* Procedural Crystal-Clear Tooth Mesh representation */}
      
      {/* Crown base body */}
      <mesh position={[0, 0.1, 0]} scale={[1.0, 0.8, 1.0]}>
        <sphereGeometry args={[0.28, 32, 32]} />
        <meshPhysicalMaterial
          transmission={1.0}
          roughness={0.08}
          thickness={1.3}
          ior={1.52}
          color="#d2e4f3"
          clearcoat={1.0}
          clearcoatRoughness={0.02}
          metalness={0.05}
          reflectivity={0.9}
        />
      </mesh>

      {/* Molar Cusp 1 (Front Left) */}
      <mesh position={[-0.11, 0.22, -0.11]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshPhysicalMaterial
          transmission={1.0}
          roughness={0.08}
          thickness={1.3}
          ior={1.52}
          color="#d2e4f3"
          clearcoat={1.0}
          clearcoatRoughness={0.02}
          metalness={0.05}
          reflectivity={0.9}
        />
      </mesh>

      {/* Molar Cusp 2 (Front Right) */}
      <mesh position={[0.11, 0.22, -0.11]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshPhysicalMaterial
          transmission={1.0}
          roughness={0.08}
          thickness={1.3}
          ior={1.52}
          color="#d2e4f3"
          clearcoat={1.0}
          clearcoatRoughness={0.02}
          metalness={0.05}
          reflectivity={0.9}
        />
      </mesh>

      {/* Molar Cusp 3 (Back Left) */}
      <mesh position={[-0.11, 0.22, 0.11]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshPhysicalMaterial
          transmission={1.0}
          roughness={0.08}
          thickness={1.3}
          ior={1.52}
          color="#d2e4f3"
          clearcoat={1.0}
          clearcoatRoughness={0.02}
          metalness={0.05}
          reflectivity={0.9}
        />
      </mesh>

      {/* Molar Cusp 4 (Back Right) */}
      <mesh position={[0.11, 0.22, 0.11]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshPhysicalMaterial
          transmission={1.0}
          roughness={0.08}
          thickness={1.3}
          ior={1.52}
          color="#d2e4f3"
          clearcoat={1.0}
          clearcoatRoughness={0.02}
          metalness={0.05}
          reflectivity={0.9}
        />
      </mesh>

      {/* Bifurcation organic base */}
      <mesh position={[0, -0.05, 0]} scale={[1.0, 0.5, 0.8]}>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshPhysicalMaterial
          transmission={1.0}
          roughness={0.15}
          thickness={0.8}
          ior={1.5}
          color="#e2ecf4"
          clearcoat={0.5}
        />
      </mesh>

      {/* Root 1: Tapered organic cone pointing down */}
      <mesh 
        position={[-0.12, -0.22, 0]} 
        rotation={[0, 0, 0.22]}
      >
        <coneGeometry args={[0.13, 0.45, 16]} />
        <meshPhysicalMaterial
          transmission={1.0}
          roughness={0.15}
          thickness={0.8}
          ior={1.5}
          color="#e2ecf4"
          clearcoat={0.5}
        />
      </mesh>

      {/* Root 2: Second organic cone pointing down */}
      <mesh 
        position={[0.12, -0.22, 0]} 
        rotation={[0, 0, -0.22]}
      >
        <coneGeometry args={[0.13, 0.45, 16]} />
        <meshPhysicalMaterial
          transmission={1.0}
          roughness={0.15}
          thickness={0.8}
          ior={1.5}
          color="#e2ecf4"
          clearcoat={0.5}
        />
      </mesh>
    </group>
  );
}
