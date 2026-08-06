interface ProjectCardProps {
  title: string;
  description: string;
  visitLabel: string;
  aboutLabel: string;
  visitUrl: string;
  aboutUrl: string;
}

export default function ProjectCard({
  title,
  description,
  visitLabel,
  aboutLabel,
  visitUrl,
  aboutUrl,
}: ProjectCardProps) {
  return (
    <div className="border border-gray-200 rounded-xl p-5 hover:shadow-sm transition">
      <h3 className="text-lg font-bold text-gray-900 mb-1.5">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-4">
        {description}
      </p>
      <div className="flex gap-3">
        <a
          href={visitUrl}
          target="_blank"
          rel="noreferrer"
          className="text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md px-3.5 py-1.5 transition"
        >
          {visitLabel}
        </a>
        <a
          href={aboutUrl}
          target="_blank"
          rel="noreferrer"
          className="text-sm border border-gray-300 hover:border-gray-400 text-gray-900 rounded-md px-3.5 py-1.5 transition"
        >
          {aboutLabel}
        </a>
      </div>
    </div>
  );
}