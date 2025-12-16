"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import { Project } from "@/lib/data";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadProject() {
      try {
        const { data } = await supabase
          .from("projects")
          .select("*")
          .eq("slug", params.slug)
          .single();
        if (data) {
          setProject(data);
        } else {
          const { PROJECTS } = await import("@/lib/data");
          const found = PROJECTS.find((p) => p.slug === params.slug);
          setProject(found || null);
        }
      } catch {
        const { PROJECTS } = await import("@/lib/data");
        const found = PROJECTS.find((p) => p.slug === params.slug);
        setProject(found || null);
      } finally {
        setIsLoading(false);
      }
    }
    loadProject();
  }, [params.slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-[--foreground-strong] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6">
        <h1 className="text-2xl font-medium mb-4">Project not found</h1>
        <button
          onClick={() => router.back()}
          className="text-[--foreground-muted] hover:text-[--foreground-strong] transition-colors"
        >
          Go back
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="px-6 md:px-12 lg:px-24 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[--foreground-muted] hover:text-[--foreground-strong] transition-colors"
        >
          <ArrowLeft size={16} />
          Back
        </Link>
      </header>

      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 py-12 md:py-20">
        <div className="max-w-5xl">
          {/* Meta info */}
          <div className="flex flex-wrap gap-4 mb-6">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs text-[--foreground-subtle] uppercase tracking-widest"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-0.03em] mb-6 leading-[1.1]">
            {project.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-[--foreground-muted] max-w-2xl leading-relaxed mb-10">
            {project.description}
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[--foreground-strong] text-[--background] text-sm tracking-wide hover:opacity-90 transition-opacity"
              >
                Visit Site
                <ArrowUpRight size={16} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[--border-strong] text-[--foreground-strong] text-sm tracking-wide hover:bg-[--surface] transition-colors"
              >
                <Github size={16} />
                View Code
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Project Image */}
      {project.imageUrl && (
        <section className="px-6 md:px-12 lg:px-24 pb-16">
          <div className="max-w-6xl">
            <div className="relative aspect-video bg-[--surface] overflow-hidden">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Content Section */}
      {project.content && (
        <section className="dark-section px-6 md:px-12 lg:px-24 py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.02em] mb-8">
              About This Project
            </h2>
            <div className="space-y-6 text-[--dark-text-muted] text-lg leading-relaxed">
              {project.content.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technologies Detail */}
      <section className="px-6 md:px-12 lg:px-24 py-16 md:py-24 border-t border-[--border]">
        <div className="max-w-5xl">
          <h2 className="text-xs tracking-[0.2em] uppercase text-[--foreground-subtle] mb-8">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm border border-[--border] text-[--foreground-muted]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="dark-section px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] mb-6">
            Interested in working together?
          </h2>
          <p className="text-[--dark-text-muted] mb-8 max-w-md">
            I&apos;m always open to discussing new projects and opportunities.
          </p>
          <a
            href="mailto:jeremiahegemonye.dev@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[--dark-text] text-[--dark-bg] text-sm tracking-wide hover:opacity-90 transition-opacity"
          >
            Get in Touch
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
}
