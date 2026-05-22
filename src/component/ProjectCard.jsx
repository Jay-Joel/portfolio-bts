import { useState } from "react";

const ProjectCard = ({ projet, onOpen }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`relative rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300
        border border-slate-500/20 hover:border-orange-600
        ${hover ? "shadow-2xl -translate-y-2" : "shadow-lg translate-y-0"}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* IMAGE */}
      <div className="relative w-full h-52 md:h-56">
        <img
          src={projet.image}
          alt={projet.titre}
          className="w-full h-full object-cover"
        />

        <div
          className={`absolute inset-0 bg-black/70 flex items-center justify-center gap-3 transition-opacity duration-300
          ${hover ? "opacity-100" : "opacity-0"}`}
        >
          {projet.demo && (
            <a
              href={projet.demo}
              className="px-4 py-2 bg-orange-500 text-white rounded-md text-sm"
            >
              🚀 Démo
            </a>
          )}

          {projet.github && (
            <a
              href={projet.github}
              className="px-4 py-2 bg-slate-800 text-white rounded-md text-sm"
            >
              🐙 GitHub
            </a>
          )}
        </div>

        {/* CATEGORY */}
        <div className="absolute top-3 left-3 px-3 py-1 bg-slate-800/70 rounded-lg text-xs text-white/80">
          {projet.categorie}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h4 className="text-lg font-bold text-white mb-2">{projet.titre}</h4>

        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
          {projet.description}
        </p>

        {/* BUTTON DETAILS */}
        <button
          onClick={onOpen}
          className="w-full mt-2 px-4 py-2 bg-orange-500/10 text-orange-300 border border-orange-500/30 rounded-md hover:bg-orange-500/20 transition"
        >
          Voir détails
        </button>

        {/* TECH */}
        <div className="flex flex-wrap gap-2 mt-3">
          {projet.technologies?.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-md bg-orange-500/10 text-orange-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
