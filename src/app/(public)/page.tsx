"use client";

import { useEffect, useState, useRef } from "react";
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
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-32 overflow-hidden hero-gradient"
    >
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Floating orbs - respond to mouse */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large warm orb - top right */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full float-1"
          style={{
            background:
              "radial-gradient(circle, rgba(200, 180, 160, 0.15) 0%, transparent 70%)",
            top: "5%",
            right: "10%",
            transform: `translate(${(mousePosition.x - 0.5) * -30}px, ${
              (mousePosition.y - 0.5) * -30
            }px)`,
            transition: "transform 0.3s ease-out",
          }}
        />

        {/* Medium slate orb - bottom left */}
        <div
          className="absolute w-[400px] h-[400px] rounded-full float-2"
          style={{
            background:
              "radial-gradient(circle, rgba(100, 100, 120, 0.1) 0%, transparent 70%)",
            bottom: "10%",
            left: "5%",
            transform: `translate(${(mousePosition.x - 0.5) * 20}px, ${
              (mousePosition.y - 0.5) * 20
            }px)`,
            transition: "transform 0.3s ease-out",
          }}
        />

        {/* Small accent orb - middle */}
        <div
          className="absolute w-[250px] h-[250px] rounded-full float-3"
          style={{
            background:
              "radial-gradient(circle, rgba(160, 140, 120, 0.12) 0%, transparent 70%)",
            top: "40%",
            right: "30%",
            transform: `translate(${(mousePosition.x - 0.5) * 40}px, ${
              (mousePosition.y - 0.5) * 40
            }px)`,
            transition: "transform 0.3s ease-out",
          }}
        />

        {/* Tiny accent dot */}
        <div
          className="absolute w-3 h-3 rounded-full bg-[--accent-warm] opacity-30"
          style={{
            top: "30%",
            left: "20%",
            transform: `translate(${(mousePosition.x - 0.5) * 60}px, ${
              (mousePosition.y - 0.5) * 60
            }px)`,
            transition: "transform 0.2s ease-out",
          }}
        />

        {/* Another tiny dot */}
        <div
          className="absolute w-2 h-2 rounded-full bg-[--accent] opacity-20"
          style={{
            bottom: "35%",
            right: "15%",
            transform: `translate(${(mousePosition.x - 0.5) * -50}px, ${
              (mousePosition.y - 0.5) * -50
            }px)`,
            transition: "transform 0.2s ease-out",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl">
        {/* Name tag */}
        <div
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm tracking-[0.15em] uppercase text-[--foreground-muted]">
            <span className="w-8 h-px bg-[--foreground-muted]" />
            Jeremiah Egemonye
          </span>
        </div>

        {/* Main headline */}
        <h1
          className={`text-[clamp(2.5rem,8vw,5.5rem)] font-medium leading-[1.05] tracking-[-0.03em] mb-8 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Creative Frontend
          <br />
          <span className="text-[--accent-highlight]">Engineer</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-lg md:text-xl text-[--foreground-muted] max-w-lg leading-relaxed mb-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Building digital experiences with precision, clarity, and a focus on
          what truly matters—the user.
        </p>

        {/* CTA */}
        <div
          className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 px-6 py-3.5 bg-[--foreground-strong] text-[--background] text-sm tracking-wide hover:bg-[--accent-warm] transition-all duration-300"
          >
            View Work
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="mailto:jeremiahegemonye.dev@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-[--border-strong] text-[--foreground-strong] text-sm tracking-wide hover:bg-[--surface] hover:border-[--foreground-muted] transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-12 left-0 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center gap-3 text-xs text-[--foreground-subtle] tracking-widest uppercase">
            <div className="w-px h-12 bg-[--border-strong] animate-pulse" />
            Scroll
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
