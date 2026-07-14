"use client";

import React from "react";
import Hero from "@/components/sections/Hero";
import Showcase from "@/components/sections/Showcase";
import Features from "@/components/sections/Features";
import Doctors from "@/components/sections/Doctors";
import Story from "@/components/sections/Story";
import Booking from "@/components/sections/Booking";

export default function Home() {
  return (
    <div className="relative w-full">
      <Hero />
      <Showcase />
      <Features />
      <Doctors />
      <Story />
      <Booking />
    </div>
  );
}
