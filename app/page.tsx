"use client";

import "@/styles/home.css";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ShowcaseSection from "@/components/home/ShowcaseSection";
import ThemeCollections from "@/components/home/ThemeCollections";
import GetStartedCTA from "@/components/home/GetStartedCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ShowcaseSection />
      <ThemeCollections />
      <GetStartedCTA />
    </>
  );
}
