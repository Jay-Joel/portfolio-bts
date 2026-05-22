import { useState } from "react";
import { projects } from "../constants/projects";
import ProjectCard from "../component/ProjectCard";

/* FILTERS */
const FILTERS = [
  { id: "all", label: "Tous", icon: "🎯" },
  { id: "web", label: "Web", icon: "🌐" },
  { id: "mobile", label: "Mobile", icon: "📱" },
  { id: "other", label: "Autres", icon: "🔧" },
];

/* SECTION SIMPLE */
const Section = ({ title, text }) => (
  <div className="mb-4">
    <h3 className="text-orange-300 font-semibold mb-1">{title}</h3>
    <p className="text-slate-300 text-sm">{text}</p>
  </div>
);

/* SECTION LISTE */
const ListSection = ({ title, items }) => (
  <div className="mb-4">
    <h3 className="text-orange-300 font-semibold mb-1">{title}</h3>
    <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
      {items?.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);

const Projets = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjets =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.categorie === activeFilter);

  return (
    <section id="projets" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-amber-500 mb-4">
            💼 Mes Projets
          </h2>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Découvrez les projets que j&apos;ai réalisés durant ma formation.
          </p>
        </div>

        {/* FILTERS */}
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

        {/* PROJECTS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjets.map((projet) => (
            <ProjectCard
              key={projet.titre}
              projet={projet}
              onOpen={() => setSelectedProject(projet)}
            />
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-slate-900 max-w-3xl w-full rounded-2xl p-6 border border-slate-700 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-orange-400 mb-2">
              {selectedProject.icon} {selectedProject.titre}
            </h2>

            <p className="text-slate-300 mb-6">{selectedProject.description}</p>

            <Section
              title="🎯 Objectif"
              text={selectedProject.details.objectif}
            />

            <ListSection
              title="🧠 Objectifs"
              items={selectedProject.details.objectifs}
            />

            <Section
              title="🛠️ Technologies"
              text={selectedProject.details.technologies}
            />

            <Section
              title="🏗️ Architecture"
              text={selectedProject.details.architecture}
            />

            <ListSection
              title="⚙️ Fonctionnalités"
              items={selectedProject.details.fonctionnalites}
            />

            <ListSection
              title="🚧 Difficultés"
              items={selectedProject.details.difficultes}
            />

            <Section
              title="📈 Résultats"
              text={selectedProject.details.resultats}
            />

            <ListSection
              title="🚀 Améliorations possibles"
              items={selectedProject.details.ameliorations}
            />

            {/* PITCH */}
            <div className="mt-6 p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
              <p className="text-orange-200 font-medium">
                🎤 {selectedProject.details.pitch}
              </p>
            </div>

            {/* BUTTON */}
            <div className="mt-6 text-right">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 bg-red-500/20 text-red-300 rounded-md hover:bg-red-500/30"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projets;
