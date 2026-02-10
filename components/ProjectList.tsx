"use client";

import ProjectListItem from "./ProjectListItem";
import { useLanguageStore } from "@/lib/store";
import type { Project } from "@/types/project";

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  const language = useLanguageStore((state) => state.language);

  if (projects.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-text-sub">No projects found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {projects.map((project) => (
        <ProjectListItem
          key={project.id}
          project={project}
          currentLang={language}
        />
      ))}
    </div>
  );
}
