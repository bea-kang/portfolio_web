interface ContextCardProps {
  label: string;
  metric: string;
  description: string;
}

export default function ContextCard({ label, metric, description }: ContextCardProps) {
  return (
    <div className="relative p-4 rounded-lg border border-stroke bg-dark-gray/50 backdrop-blur-sm">
      {/* Glassmorphism effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-lg pointer-events-none" />

      <div className="relative z-10">
        {/* Label */}
        <span className="text-lime text-caption font-medium uppercase tracking-wider">
          {label}
        </span>

        {/* Metric */}
        <div className="mt-1">
          <span className="text-h1 text-white font-bold tracking-tight">
            {metric}
          </span>
        </div>

        {/* Description */}
        <p className="mt-1 text-text-sub text-caption">
          {description}
        </p>
      </div>
    </div>
  );
}
