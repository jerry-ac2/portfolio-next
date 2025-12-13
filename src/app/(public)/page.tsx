"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Project } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

/*
  Design Philosophy: Elegant & Centered
  
  - Typography-driven, center-aligned layout
  - Card components with visual presence
  - Generous whitespace and strong vertical rhythm
  - Motion as refinement, not performance
*/

function Opening() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 text-center">
      <div
        className="max-w-4xl flex flex-col items-center transition-all duration-700 ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(16px)",
        }}
      >
        <span className="block mb-8 text-sm tracking-[0.2em] uppercase text-(--accent) font-medium">
          Jeremiah Egemonye
        </span>

        <h1 className="text-4xl w-11/12 text-center md:text-6xl lg:text-7xl leading-[1.12] mb-10 text-(--foreground-strong) font-serif">
          Crafting digital experiences
          <br />
          <span className="text-(--muted-foreground)">
            with clarity & purpose.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-(--muted-foreground) max-w-xl mx-auto leading-relaxed">
          Frontend & Mobile Developer specializing in React, Next.js, and
          polished user interfaces.
        </p>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group py-6 border-b border-(--border) last:border-b-0 transition-all duration-300 hover:bg-(--surface-warm)/50">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        {/* Title & Tech */}
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-serif text-(--foreground-strong) group-hover:text-(--accent) transition-colors duration-300 mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-(--muted-foreground) leading-relaxed max-w-lg">
            {project.description}
          </p>
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 md:justify-end">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs tracking-wide text-(--foreground-dim) bg-(--surface) rounded-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Link */}
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-3 text-sm text-(--foreground-dim) hover:text-(--accent) transition-colors duration-300"
        >
          View Project
          <ArrowUpRight size={14} />
        </a>
      )}
    </article>
  );
}

function WorkSection({ projects }: { projects: Project[] }) {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 md:py-32 bg-(--background-warm)">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <span className="block text-sm tracking-[0.2em] uppercase text-(--muted-foreground) mb-4">
            Selected Work
          </span>
          <p className="text-lg text-(--foreground-dim) max-w-md mx-auto">
            A curated selection of projects that showcase craft and attention to
            detail.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-32 md:py-40 bg-(--surface)">
      <div className="max-w-3xl mx-auto text-center">
        <span className="block text-sm tracking-[0.2em] uppercase text-(--accent) mb-12">
          About
        </span>

        <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed text-(--foreground-strong) font-serif mb-16">
          I believe that software should feel natural—like a physical object
          that just works.
        </p>

        <div className="flex flex-col items-center text-center md:text-center space-y-8 text-(--muted-foreground)w-2xl mx-auto">
          <p className="leading-loose text-center">
            With a background in product engineering, I focus on the
            intersection of technical excellence and aesthetic restraint. My
            work is guided by the principle that the best interface is the one
            that requires the least amount of thought from the user.
          </p>
          <p className="leading-loose">
            Currently, I&apos;m exploring cross-platform experiences with React
            Native and refining my approach to accessible, performance-first web
            development.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="px-6 md:px-12 lg:px-24 py-32 md:py-40 bg-(--background)">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-(--foreground-strong) mb-8 leading-tight">
          Let&apos;s build something
          <br />
          <span className="italic text-(--accent)">enduring</span>.
        </h2>

        <p className="text-lg text-(--muted-foreground) mb-12 max-w-md mx-auto">
          I&apos;m currently available for select freelance opportunities and
          consulting.
        </p>

        <a
          href="mailto:jeremiahegemonye.dev@gmail.com"
          className="inline-block px-10 py-4 text-sm uppercase tracking-widest transition-all duration-300"
          style={{
            backgroundColor: isHovered
              ? "var(--accent)"
              : "var(--foreground-strong)",
            color: "var(--background)",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Get in Touch
        </a>
      </div>
    </section>
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

  if (isLoading) return null;

  return (
    <main className="w-full overflow-hidden">
      <Opening />
      <WorkSection projects={projects} />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
