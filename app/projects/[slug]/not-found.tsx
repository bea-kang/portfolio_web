import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container py-20 text-center min-h-[60vh] flex flex-col items-center justify-center">
      <div className="mb-8">
        <span className="material-symbols-outlined text-[80px] text-stroke">
          folder_off
        </span>
      </div>

      <h1 className="text-h1 text-white mb-4 font-bold">Project Not Found</h1>

      <p className="text-text-sub mb-8 max-w-md">
        The project you are looking for does not exist or has been removed.
      </p>

      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 px-6 py-3 bg-lime text-almost-black font-semibold rounded-full hover:bg-lime/90 transition-colors"
      >
        <span className="material-symbols-outlined">arrow_back</span>
        View All Projects
      </Link>
    </div>
  );
}
