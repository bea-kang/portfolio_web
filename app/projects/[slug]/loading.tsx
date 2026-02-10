export default function Loading() {
  return (
    <div className="container py-20 animate-pulse">
      {/* Back button skeleton */}
      <div className="h-6 bg-dark-gray rounded w-32 mb-8" />

      {/* Hero image skeleton */}
      <div className="w-full aspect-video bg-dark-gray rounded-2xl mb-8" />

      {/* Tags skeleton */}
      <div className="flex gap-2 mb-4">
        <div className="h-7 bg-dark-gray rounded-full w-20" />
        <div className="h-7 bg-dark-gray rounded-full w-24" />
        <div className="h-7 bg-dark-gray rounded-full w-16" />
      </div>

      {/* Title skeleton */}
      <div className="h-12 bg-dark-gray rounded w-3/4 mb-4" />

      {/* Meta skeleton */}
      <div className="h-5 bg-dark-gray rounded w-1/2 mb-8" />

      {/* Divider */}
      <hr className="border-stroke mb-12" />

      {/* Content skeleton */}
      <div className="max-w-3xl space-y-4">
        <div className="h-4 bg-dark-gray rounded w-full" />
        <div className="h-4 bg-dark-gray rounded w-5/6" />
        <div className="h-4 bg-dark-gray rounded w-4/6" />
        <div className="h-8 bg-dark-gray rounded w-1/3 mt-8" />
        <div className="h-4 bg-dark-gray rounded w-full" />
        <div className="h-4 bg-dark-gray rounded w-5/6" />
        <div className="h-4 bg-dark-gray rounded w-3/4" />
      </div>
    </div>
  );
}
