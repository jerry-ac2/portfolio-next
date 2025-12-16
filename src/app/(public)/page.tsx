"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Project } from "@/lib/data";
import { ArrowUpRight, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

/*
  Design: Refined Modern (Warm palette, interactive hero)
  
  - Warm charcoal instead of pure black
  - Soft cream backgrounds
  - Interactive floating elements
  - Subtle, smooth animations
*/

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Waving hand emoji - top left */}
      <div className="absolute top-32 left-6 lg:left-24 text-5xl lg:text-6xl animate-pulse">
        👋
      </div>

      {/* Main content */}
      <div className="px-6 lg:px-24 pt-40 lg:pt-48 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left column - Text */}
            <div>
              {/* Main headline */}
              <h1
                className={`text-[clamp(3rem,10vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.03em] mb-8 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                Frontend
                <br />
                Developer.
              </h1>

              {/* Subtitle */}
              <p
                className={`text-lg lg:text-xl text-[#999] max-w-md leading-relaxed transition-all duration-700 delay-100 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                I like to craft solid and scalable frontend products with{" "}
                <span className="text-white">great user experiences</span>.
              </p>

              {/* Stats row */}
              <div
                className={`grid grid-cols-2 gap-8 mt-16 pt-8 border-t border-[rgba(255,255,255,0.1)] transition-all duration-700 delay-200 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div>
                  <p className="text-sm text-[#666] leading-relaxed">
                    Highly skilled at progressive enhancement, design systems &
                    UI Engineering.
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#666] leading-relaxed">
                    Over a three years of experience building products for
                    clients across several countries.
                  </p>
                </div>
              </div>
            </div>

            {/* Right column - Image placeholder */}
            <div
              className={`relative transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="aspect-[4/5] bg-[#1a1a1a] rounded-sm overflow-hidden flex items-center justify-center">
                <span className="text-[#333] text-sm">Your Photo Here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block p-8 lg:p-10 hover:bg-[rgba(255,255,255,0.02)] transition-colors duration-300"
    >
      {/* Title */}
      <h3 className="text-xl lg:text-2xl font-medium tracking-[-0.01em] mb-4 text-white">
        {project.title}
      </h3>

      {/* Technologies */}
      <p className="text-[11px] text-[#888] uppercase tracking-[0.15em] mb-4">
        {project.technologies.slice(0, 3).join(" + ")}
      </p>

      {/* Description */}
      <p className="text-sm text-[#888] leading-relaxed mb-10 line-clamp-2">
        {project.description}
      </p>

      {/* View link with underline animation */}
      <div className="inline-flex items-center gap-2 text-sm text-white">
        <ArrowUpRight
          size={14}
          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
        />
        <span className="relative">
          View
          <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
        </span>
      </div>
    </Link>
  );
}

function WorkSection({ projects }: { projects: Project[] }) {
  return (
    <section id="work" className="bg-[#0a0a0a] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-12 lg:mb-16">
          <span className="text-[11px] tracking-[0.2em] uppercase text-[#666]">
            Selected Work
          </span>
          <h2 className="text-3xl lg:text-4xl font-medium tracking-[-0.02em] mt-4 text-white">
            Featured Projects
          </h2>
        </div>

        {/* Project grid - 3 columns with vertical dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`${
                index % 3 !== 2
                  ? "lg:border-r border-[rgba(255,255,255,0.08)]"
                  : ""
              } ${
                index % 2 !== 1
                  ? "md:border-r md:lg:border-r-0 border-[rgba(255,255,255,0.08)]"
                  : ""
              }`}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left column */}
          <div>
            <span className="text-xs tracking-[0.2em] uppercase text-[--foreground-subtle]">
              About
            </span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] mt-4 mb-8">
              A bit about me
            </h2>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <p className="text-lg text-[--foreground-muted] leading-relaxed">
              I&apos;m a frontend developer focused on building products that
              are both beautiful and functional. With experience across React,
              Next.js, and React Native, I bring ideas to life through clean
              code and thoughtful design.
            </p>
            <p className="text-lg text-[--foreground-muted] leading-relaxed">
              My approach combines technical precision with creative
              problem-solving. I believe the best interfaces are invisible—they
              just work.
            </p>
            <div className="pt-6">
              <a
                href="/about"
                className="inline-flex items-center gap-2 text-sm text-[--foreground-strong] hover:text-[--foreground-muted] transition-colors duration-300"
              >
                Learn more about me
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="dark-section px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl">
          <span className="text-xs tracking-[0.2em] uppercase text-[--dark-text-muted]">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.03em] mt-4 mb-8 leading-[1.1]">
            Let&apos;s work
            <br />
            together
          </h2>
          <p className="text-lg text-[--dark-text-muted] mb-10 max-w-md">
            Have a project in mind? I&apos;m currently available for freelance
            work and collaborations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:jeremiahegemonye.dev@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[--dark-text] text-[--dark-bg] text-sm tracking-wide hover:opacity-90 transition-opacity duration-300"
            >
              Send an Email
              <ArrowUpRight size={16} />
            </a>
            <a
              href="https://github.com/ttjerry"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[rgba(255,255,255,0.2)] text-sm tracking-wide hover:bg-[rgba(255,255,255,0.05)] transition-colors duration-300"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 md:px-12 lg:px-24 py-8 border-t border-[--border]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-[--foreground-subtle]">
          © {currentYear} Jeremiah Egemonye. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/ttjerry"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[--foreground-subtle] hover:text-[--foreground-strong] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/_jerry0x"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[--foreground-subtle] hover:text-[--foreground-strong] transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com/in/jeremiah-egemonye"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[--foreground-subtle] hover:text-[--foreground-strong] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        const { data } = await supabase
          .from("projects")
          .select("*")
          .order("created_at", { ascending: false });
        if (data) setProjects(data);
      } catch {
        const { PROJECTS } = await import("@/lib/data");
        setProjects(PROJECTS);
      } finally {
        setIsLoading(false);
      }
    }
    loadProjects();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[--foreground-strong] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <WorkSection projects={projects} />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
