// src/components/Projet.jsx
import { useState } from "react";
import { projets } from "../constants/projects";
import ProjectCard from "../component/ProjectCard";

// Filtres disponibles
const FILTERS = [
  { id: "all", label: "Tous", icon: "🎯" },
  { id: "web", label: "Web", icon: "🌐" },
  { id: "mobile", label: "Mobile", icon: "📱" },
  { id: "other", label: "Autres", icon: "🔧" },
];

const Projet = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjets =
    activeFilter === "all"
      ? projets
      : projets.filter((p) => p.categorie === activeFilter);

  return (
    <section id="projets" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-500 mb-4">💼 Mes Projets</h2>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Découvrez les projets que j&apos;ai réalisés durant ma formation et
            mes expériences professionnelles.
          </p>
        </div>

        {/* Filtres */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {FILTERS.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                ${
                  activeFilter === filter.id
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                    : "glass text-slate-300 hover:text-white hover:bg-white/10"
                }`}
            >
              <span className="mr-2">{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grille de projets */}
        {filteredProjets.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjets.map((projet) => (
              <ProjectCard key={projet.titre} projet={projet} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <span className="text-6xl mb-4 block">🔍</span>
            <p className="text-slate-400">
              Aucun projet trouvé dans cette catégorie.
            </p>
          </div>
        )}

        {/* Message de fin */}
        <div className="mt-16 text-center">
          <div className="inline-block p-6 rounded-2xl glass">
            <p className="text-slate-300">
              🚀{" "}
              <span className="text-orange-400 font-semibold">
                Plus de projets à venir
              </span>{" "}
              — Je travaille continuellement sur de nouveaux projets
              passionnants !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projet;