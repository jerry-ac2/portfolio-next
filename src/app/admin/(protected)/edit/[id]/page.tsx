"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Save, Upload } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter, useParams } from "next/navigation";

export default function EditProjectPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    technologies: "",
    imageUrl: "",
    liveUrl: "",
    githubUrl: "",
  });

  const fetchProject = useCallback(
    async (projectId: string) => {
      try {
        const { data, error } = await supabase
          .from("projects")
          .select("*")
          .eq("id", projectId)
          .single();

        if (error) throw error;

        if (data) {
          setFormData({
            title: data.title || "",
            slug: data.slug || "",
            description: data.description || "",
            technologies: Array.isArray(data.technologies)
              ? data.technologies.join(", ")
              : data.technologies || "",
            imageUrl: data.imageUrl || "",
            liveUrl: data.liveUrl || "",
            githubUrl: data.githubUrl || "",
          });
        }
      } catch (error) {
        console.error("Error fetching project:", error);
        alert("Error fetching project details");
        router.push("/admin");
      } finally {
        setFetching(false);
      }
    },
    [router]
  );

  useEffect(() => {
    if (id) {
      fetchProject(id);
    }
  }, [id, fetchProject]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }
    const file = e.target.files[0];
    setUploadingImage(true);

    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `projects/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("portfolio")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from("portfolio").getPublicUrl(filePath);

      setFormData((prev) => ({ ...prev, imageUrl: publicUrl }));
    } catch (error) {
      console.error("Error uploading image:", error);
      alert(
        'Error uploading image. Make sure the "portfolio" bucket exists and is public.'
      );
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const technologiesArray = formData.technologies
      .split(",")
      .map((tech) => tech.trim())
      .filter((tech) => tech !== "");

    const { error } = await supabase
      .from("projects")
      .update({
        title: formData.title,
        slug: formData.slug,
        description: formData.description,
        technologies: technologiesArray,
        imageUrl: formData.imageUrl,
        liveUrl: formData.liveUrl,
        githubUrl: formData.githubUrl,
      })
      .eq("id", id);

    if (error) {
      console.error("Error updating project:", error);
      alert("Failed to update project: " + error.message);
      setLoading(false);
    } else {
      router.push("/admin");
    }
  };

  if (fetching) {
    return <div className="p-8 text-center">Loading project details...</div>;
  }

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/admin">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Edit Project</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Project Details</CardTitle>
          <CardDescription>Edit your project details.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">
                Title
              </label>
              <Input
                id="title"
                name="title"
                placeholder="Project Title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="slug" className="text-sm font-medium">
                Slug
              </label>
              <Input
                id="slug"
                name="slug"
                placeholder="project-slug"
                value={formData.slug}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Description
              </label>
              <Textarea
                id="description"
                name="description"
                placeholder="Project description..."
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="technologies" className="text-sm font-medium">
                Technologies (comma separated)
              </label>
              <Input
                id="technologies"
                name="technologies"
                placeholder="React, Next.js, Tailwind"
                value={formData.technologies}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Project Image</label>
              <div className="flex items-center gap-4">
                <Button
                  type="button"
                  variant="outline"
                  disabled={uploadingImage}
                  className="relative cursor-pointer w-full"
                >
                  {uploadingImage ? (
                    "Uploading..."
                  ) : (
                    <>
                      <Upload className="mr-2 h-4 w-4" /> Upload New Image
                      <input
                        type="file"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={handleImageUpload}
                        accept="image/*"
                      />
                    </>
                  )}
                </Button>
              </div>
              {formData.imageUrl && (
                <div className="mt-2 relative aspect-video w-full overflow-hidden rounded-lg border">
                  <Image
                    src={formData.imageUrl}
                    alt="Preview"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="liveUrl" className="text-sm font-medium">
                  Live Demo URL
                </label>
                <Input
                  id="liveUrl"
                  name="liveUrl"
                  placeholder="https://..."
                  value={formData.liveUrl}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="githubUrl" className="text-sm font-medium">
                  GitHub URL
                </label>
                <Input
                  id="githubUrl"
                  name="githubUrl"
                  placeholder="https://github.com/..."
                  value={formData.githubUrl}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full"
                disabled={loading || uploadingImage}
              >
                <Save className="mr-2 h-4 w-4" />{" "}
                {loading ? "Saving..." : "Update Project"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
