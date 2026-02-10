import { notFound } from "next/navigation";
import { getProjectBySlug, getProjectContent, getAllProjectSlugs } from "@/lib/notion";
import NotionRenderer from "@/components/NotionRenderer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const revalidate = 60;

// Generate static params for all projects
export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Bea's Portfolio`,
    description: project.description.en || project.description.kr,
    openGraph: {
      title: project.title,
      description: project.description.en || project.description.kr,
      images: project.thumbnail ? [project.thumbnail] : [],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const content = await getProjectContent(project.id);

  return (
    <article className="container py-20">
      {/* Back Button */}
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-text-sub hover:text-lime transition-colors mb-8"
      >
        <span className="material-symbols-outlined text-lg">arrow_back</span>
        <span>Back to Projects</span>
      </Link>

      {/* Hero Section */}
      <header className="mb-16">
        {project.thumbnail && (
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 bg-dark-gray">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm rounded-full bg-lime/20 text-lime border border-lime/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-h1 text-white mb-4 font-bold">{project.title}</h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-text-sub">
          {project.company && (
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-lg">business</span>
              {project.company}
            </span>
          )}
          {project.role && (
            <>
              <span className="text-stroke">|</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-lg">badge</span>
                {project.role}
              </span>
            </>
          )}
          {project.period.start && (
            <>
              <span className="text-stroke">|</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-lg">calendar_today</span>
                {project.period.start} - {project.period.end || "Present"}
              </span>
            </>
          )}
        </div>

        {/* Context Card */}
        {project.context.mau && (
          <div className="mt-6 inline-flex items-center gap-3 px-4 py-3 bg-dark-gray/50 rounded-xl border border-stroke">
            <span className="text-lime font-bold text-lg">{project.context.mau}</span>
            <span className="text-text-sub text-sm">{project.context.type}</span>
          </div>
        )}

        {/* Description */}
        {(project.description.en || project.description.kr) && (
          <p className="mt-6 text-lg text-text-sub leading-relaxed max-w-3xl">
            {project.description.en || project.description.kr}
          </p>
        )}
      </header>

      {/* Divider */}
      <hr className="border-stroke mb-12" />

      {/* Content */}
      <div className="max-w-3xl">
        <NotionRenderer blocks={content as BlockObjectResponse[]} />
      </div>

      {/* Bottom Navigation */}
      <div className="mt-20 pt-8 border-t border-stroke">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-lime text-almost-black font-semibold rounded-full hover:bg-lime/90 transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          View All Projects
        </Link>
      </div>
    </article>
  );
}
