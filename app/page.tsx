import { getProjects } from "@/lib/notion";
import ProjectList from "@/components/ProjectList";
import ContextCard from "@/components/ContextCard";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="relative overflow-hidden">
      {/* Background Glows */}
      <div className="fixed top-[-10%] right-[-20%] w-[500px] h-[500px] bg-lime/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed bottom-[10%] left-[-10%] w-[350px] h-[350px] bg-lime/10 blur-[100px] rounded-full pointer-events-none z-0"></div>

      <div className="py-24 relative z-10">
        {/* Hero Section */}
        <section id="hero" className="container mb-32">
          <div className="flex flex-col gap-2">
            <h1 className="text-white tracking-tighter text-[clamp(4rem,10vw,8rem)] font-black leading-[0.9] uppercase">
              Bea <br /> <span className="text-lime">Ongs</span>
            </h1>
            <div className="flex items-center gap-3 mt-4">
              <div className="h-px w-12 bg-lime"></div>
              <h2 className="text-lime text-xl font-bold tracking-tight uppercase">Product Manager</h2>
            </div>
            <p className="text-text-sub text-lg font-medium leading-relaxed mt-6 max-w-2xl">
              Crafting digital experiences that merge function with bold aesthetics. <br />
              Bridging business goals with user needs through data-driven decisions.
            </p>
          </div>

          {/* Key Metrics - Integrated into Hero */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
            <ContextCard
              label="Experience"
              metric="5+"
              description="Years in Product"
            />
            <ContextCard
              label="Projects"
              metric="20+"
              description="Products Shipped"
            />
            <ContextCard
              label="Impact"
              metric="10M+"
              description="Users Reached"
            />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container mb-32">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-h2 text-white">Featured Projects</h2>
            <span className="text-xs font-medium text-text-sub bg-dark-gray px-3 py-1.5 rounded-full border border-stroke">
              {projects.length} Selected
            </span>
          </div>

          {projects.length > 0 ? (
            <ProjectList projects={projects} />
          ) : (
            <div className="p-12 border border-dashed border-stroke rounded-2xl text-center">
              <p className="text-text-sub">No published projects found.</p>
              <p className="text-sm text-text-sub opacity-50 mt-1">Please add a project with status 'Published' in Notion.</p>
            </div>
          )}
        </section>

        {/* About & Skills Section */}
        <AboutSection />

        {/* Contact Section */}
        <ContactSection />
      </div>
    </div>
  );
}
