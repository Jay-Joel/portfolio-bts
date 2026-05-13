import { useState } from "react";

const ProjectCard = ({ projet }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`relative rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300
        border border-slate-500/20 hover:border-orange-600
        ${hover ? "shadow-2xl -translate-y-2" : "shadow-lg translate-y-0"}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Rectangle image en haut */}
      <div className="relative w-full h-52 md:h-56 rounded-t-xl overflow-hidden">
        {/* Image */}
        <img
          src={projet.image}
          alt={projet.titre}
          className="w-full h-full object-cover"
        />

        {/* Overlay noir uniquement sur l'image */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center gap-3 transition-opacity duration-300
            ${hover ? "opacity-100" : "opacity-0"}`}
        >
          {projet.demo && (
            <a
              href={projet.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-orange-500 text-white rounded-md text-sm hover:bg-orange-600 transition-colors"
            >
              🚀 Démo
            </a>
          )}
          {projet.github && (
            <a
              href={projet.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-800 text-white rounded-md text-sm hover:bg-slate-700 transition-colors"
            >
              🐙 GitHub
            </a>
          )}
        </div>

        {/* Badge catégorie avec fond visible */}
        <div className="absolute top-3 left-3 px-3 py-1 bg-slate-800/70 border border-slate-500/20 rounded-lg text-xs text-white/80 z-10">
          {projet.categorie === "web" && "🌐 Web"}
          {projet.categorie === "mobile" && "📱 Mobile"}
          {projet.categorie === "other" && "🔧 Autre"}
        </div>
      </div>

      {/* Contenu texte sous l'image */}
      <div className="p-4">
        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
          {projet.titre}
        </h4>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
          {projet.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {projet.technologies?.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs rounded-md bg-orange-500/10 text-orange-300 border border-orange-500/20"
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