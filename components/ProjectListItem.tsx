import Image from "next/image";
import Link from "next/link";
import ContextCard from "./ContextCard";
import type { Project, Language } from "@/types/project";

interface ProjectListItemProps {
  project: Project;
  currentLang: Language;
}

export default function ProjectListItem({ project, currentLang }: ProjectListItemProps) {
  const description = project.description[currentLang] || project.description.en;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-xl border border-stroke bg-dark-gray/30 overflow-hidden transition-all duration-300 hover:bg-dark-gray/50 hover:border-lime/30"
    >
      <div className="flex flex-col md:flex-row">
        {/* Thumbnail */}
        <div className="relative w-full md:w-80 aspect-video overflow-hidden">
          {project.thumbnail ? (
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-dark-gray flex items-center justify-center">
              <span className="text-text-sub">No Image</span>
            </div>
          )}
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-lime/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-md bg-stroke/50 text-text-sub"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-h2 text-white font-semibold group-hover:text-lime transition-colors">
            {project.title}
          </h3>

          {/* Company & Role */}
          <p className="mt-1 text-text-sub text-caption">
            {project.company} · {project.role}
          </p>

          {/* Description */}
          <p className="mt-3 text-body text-text-sub line-clamp-2">
            {description}
          </p>

          {/* Context Card */}
          {project.context.type && (
            <div className="mt-4 max-w-xs">
              <ContextCard
                label={project.context.type}
                metric={project.context.mau || "-"}
                description={project.company}
              />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
