type ProjectCardProps = {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  accent: string;
  iconBg: string;
  href: string;
};

export default function ProjectCard({
  icon,
  title,
  description,
  tags,
  accent,
  iconBg,
  href,
}: ProjectCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.15] hover:bg-white/[0.06]"
    >
      {/* Accent top bar */}
      <span
        className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: accent }}
      />

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
        style={{ background: iconBg }}
      >
        {icon}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1.5 flex-1">
        <h3 className="font-bold text-[#f0ede8] tracking-tight" style={{ fontFamily: "Syne, sans-serif" }}>
          {title}
        </h3>
        <p className="text-sm text-white/40 leading-relaxed">{description}</p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-0.5 rounded bg-white/[0.06] text-white/40"
            >
              {tag}
            </span>
          ))}
        </div>
        <span
          className="text-white/20 text-base transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          style={{ color: `color-mix(in srgb, ${accent} 60%, transparent)` }}
        >
          ↗
        </span>
      </div>
    </a>
  );
}
