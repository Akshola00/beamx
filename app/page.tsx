"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { AnimatedBackground } from "animated-backgrounds";

export default function Home() {
  return (
    <div>
      <AnimatedBackground animationName="starryNight" />
      <Header />
      <Hero />
    </div>
  );
}
