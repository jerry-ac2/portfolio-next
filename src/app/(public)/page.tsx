"use client";

import { useEffect, useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { supabase } from "@/lib/supabase";
import { Project } from "@/lib/data";
import { ArrowUpRight, Github, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// --- Components ---

function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section
      className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 overflow-hidden group"
      onMouseMove={handleMouseMove}
    >
      {/* Background Abstract Image */}
      <div className="absolute top-0 right-0 w-full md:w-2/3 h-full z-0 opacity-40 pointer-events-none select-none mix-blend-screen">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/50 to-background z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background z-10" />
          <Image
            src="/hero-bg.png"
            alt="Abstract Digital Structure"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.03),
              transparent 80%
            )
          `,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-white/80 tracking-wide">
            AVAILABLE FOR WORK
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-6 leading-[0.9]">
          <span className="block hover:text-white/80 transition-colors cursor-default">
            Frontend
          </span>
          <span className="block text-white/40 hover:text-white transition-colors cursor-default">
            Developer.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 max-w-xl leading-relaxed">
          Creating digital experiences that are visually stunning and
          technically refined. Obsessed with performance, interaction, and
          accessibility.
        </p>

        <div className="flex gap-6 mt-10">
          <SocialLink href="https://github.com/ttjerry" icon={<Github />} />
          <SocialLink href="https://linkedin.com" icon={<Linkedin />} />
          <SocialLink href="https://twitter.com" icon={<Twitter />} />
          <SocialLink
            href="mailto:jeremiahegemonye.dev@gmail.com"
            icon={<Mail />}
          />
        </div>
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 border border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
    >
      {icon}
    </a>
  );
}

function SectionHeading({
  children,
  number,
}: {
  children: React.ReactNode;
  number: string;
}) {
  return (
    <div className="flex items-baseline gap-4 mb-12 border-b border-white/10 pb-4">
      <span className="text-sm font-mono text-white/40">{number}</span>
      <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white">
        {children}
      </h2>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const rotateX = useTransform(y, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(x, [-0.5, 0.5], ["-3deg", "3deg"]);

  // Truncate description logic
  const truncatedDesc =
    project.description.split(" ").slice(0, 20).join(" ") +
    (project.description.split(" ").length > 20 ? "..." : "");

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-full"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-br from-white/20 to-white/0 blur opacity-0 group-hover:opacity-100 transition duration-500" />
      {/* Removed rounded-3xl classes */}
      <div className="relative h-full bg-[#0F0F0F] border border-white/10 p-8 overflow-hidden flex flex-col justify-between">
        {/* Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
              {project.title}
            </h3>
            <span className="text-xs font-mono text-white/30 border border-white/10 px-2 py-1">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <p className="text-neutral-400 text-sm leading-relaxed mb-6">
            {truncatedDesc}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-[10px] uppercase tracking-wider font-semibold text-white/50 bg-white/5 px-2 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 flex items-center gap-4 pt-6 border-t border-white/5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white hover:text-emerald-400 transition-colors group/link"
            >
              Live Demo
              <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/40 hover:text-white transition-colors"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const scrollRef = useRef(null);

  // Parallax text effect
  const { scrollYProgress } = useScroll({ target: scrollRef });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-5%"]);

  useEffect(() => {
    async function load() {
      try {
        const { data } = await supabase
          .from("projects")
          .select("*")
          .order("created_at", { ascending: false });
        if (data) setProjects(data);
      } catch (e) {
        const { PROJECTS } = await import("@/lib/data");
        setProjects(PROJECTS);
      }
    }
    load();
  }, []);

  return (
    <div
      ref={scrollRef}
      className="bg-background selection:bg-emerald-500/30 selection:text-emerald-200"
    >
      <Hero />

      <motion.div
        className="py-12 border-y border-white/5 overflow-hidden"
        style={{ opacity: 0.5 }}
      >
        <motion.div
          style={{ x }}
          className="whitespace-nowrap flex gap-12 text-6xl md:text-8xl font-black text-white/5 uppercase tracking-tighter select-none"
        >
          Design Engineering Performance Accessibility Design Engineering
          Performance
        </motion.div>
      </motion.div>

      <section className="px-6 md:px-12 lg:px-24 py-20 max-w-7xl mx-auto">
        <SectionHeading number="01">Selected Works</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-20 border-t border-white/5 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <SectionHeading number="02">Services & Skills</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-xl font-medium text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Engineering
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Building scalable web applications with modern technologies.
                Focusing on performance optimization, SEO, and maintainability.
                Expertise in React, Next.js, and TypeScript.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                Design
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                Bridging the gap between design and development. Implementing
                pixel-perfect user interfaces with smooth interactions and
                accessible components.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-24 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-white/10 to-transparent p-12 md:p-24 border border-white/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-emerald-500/10 blur-[100px]" />

          <h2 className="relative z-10 text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Let&apos;s build something <br />{" "}
            <span className="text-emerald-400">extraordinary.</span>
          </h2>
          <p className="relative z-10 text-neutral-400 text-lg mb-10 max-w-2xl mx-auto">
            Currently available for freelance projects and open to new
            opportunities. Let&apos;s discuss how I can help your team.
          </p>

          <Link
            href="mailto:jeremiahegemonye.dev@gmail.com"
            className="relative z-10 inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold hover:scale-105 transition-transform duration-300"
          >
            Get in touch
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      <footer className="py-8 text-center text-white/20 text-sm">
        © {new Date().getFullYear()} Jeremiah Egemonye. Crafted with precision.
      </footer>
    </div>
  );
}
