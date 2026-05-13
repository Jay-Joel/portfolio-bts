import { jobs } from "../constants/constants";

// Composant Timeline Item
const TimelineItem = ({ job, isLast }) => (
  <div className="relative flex gap-6 pb-12">
    {/* Ligne verticale */}
    {!isLast && (
      <div className="absolute left-[19px] top-12 w-0.5 h-full bg-gradient-to-b from-amber-500/50 to-transparent" />
    )}

    {/* Point de la timeline */}
    <div className="relative z-10 flex-shrink-0">
      <div className="w-10 h-10 rounded-full bg-amber-500/20 border-2 border-amber-500 flex items-center justify-center">
        <span className="text-lg">{job.icon || "💼"}</span>
      </div>
    </div>

    {/* Contenu – Card */}
    <div className="flex-1 p-6 rounded-xl bg-gray-900/50 border border-gray-700 hover:border-amber-500 transition-all transform hover:-translate-y-1 hover:shadow-lg">
      {/* En-tête */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
        <div>
          <h4 className="text-xl font-bold text-white">{job.poste}</h4>
          <p className="text-amber-500 font-medium">{job.entreprise}</p>
        </div>
        <span className="px-4 py-1.5 rounded-full bg-gray-800 text-sm text-slate-300">
          📅 {job.duree}
        </span>
      </div>

      {/* Description */}
      <p className="text-slate-400 leading-relaxed mb-4">{job.description}</p>

      {/* Technologies */}
      {job.technologies && (
        <div className="flex flex-wrap gap-2">
          {job.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-white/5 text-slate-300 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const Parcours = () => {
  return (
    <section className="py-20 px-6 flex flex-col items-center">
      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold text-amber-500 mb-4">Mon Parcours</h1>
        <p className="text-sm text-slate-400 max-w-2xl mx-auto">
          Mes expériences professionnelles et stages qui m'ont permis de développer mes compétences en entreprise.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl w-full">
        {jobs.map((job, index) => (
          <TimelineItem
            key={job.poste}
            job={job}
            isLast={index === jobs.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Parcours;