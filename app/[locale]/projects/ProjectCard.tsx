interface ProjectCardProps {
  title: string;
  description: string;
  tag: string;
  visitLabel: string;
  aboutLabel: string;
  visitUrl: string;
  aboutUrl: string;
}

export default function ProjectCard({
  title,
  description,
  tag,
  visitLabel,
  aboutLabel,
  visitUrl,
  aboutUrl,
}: ProjectCardProps) {
  const isVisitDisabled = visitUrl === "#";
  const isAboutDisabled = aboutUrl === "#";

  const linkBaseClass =
    "text-sm rounded-md px-3.5 py-1.5 transition inline-flex items-center justify-center";

  const disabledClass =
    "bg-gray-100 text-gray-400 cursor-not-allowed pointer-events-none border border-gray-200";

  return (
    <div className="border border-gray-200 rounded-xl p-5 hover:shadow-sm transition bg-white">
      <div className="flex items-center justify-between gap-3 mb-2">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <span className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full shrink-0">
          {tag}
        </span>
      </div>

      <p className="text-gray-500 text-sm leading-relaxed mb-4">
        {description}
      </p>

      <div className="flex gap-2 pt-3 border-t border-gray-100">
        <a
          href={isVisitDisabled ? undefined : visitUrl}
          target={isVisitDisabled ? undefined : "_blank"}
          rel={isVisitDisabled ? undefined : "noreferrer"}
          aria-disabled={isVisitDisabled}
          tabIndex={isVisitDisabled ? -1 : 0}
          className={`${linkBaseClass} ${
            isVisitDisabled
              ? disabledClass
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {visitLabel}
        </a>

        <a
          href={isAboutDisabled ? undefined : aboutUrl}
          target={isAboutDisabled ? undefined : "_blank"}
          rel={isAboutDisabled ? undefined : "noreferrer"}
          aria-disabled={isAboutDisabled}
          tabIndex={isAboutDisabled ? -1 : 0}
          className={`${linkBaseClass} ${
            isAboutDisabled
              ? disabledClass
              : "border border-gray-300 hover:border-gray-400 text-gray-900"
          }`}
        >
          {aboutLabel}
        </a>
      </div>
    </div>
  );
}
