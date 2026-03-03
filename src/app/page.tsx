"use client";

import { CursorGlow } from "@/components/CursorGlow";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Stack } from "@/components/Stack";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Stats } from "@/components/Stats";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Nav />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Experience />
      <Stats />
      <Contact />
      <Footer />
      <ScrollReveal />
    </>
  );
}
