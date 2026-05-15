import Card from "../component/Card";
import { skills } from "../constants/index";

const Competences = () => {
  return (
    <section
      className="
        min-h-screen
        flex
        flex-col
        items-center
        px-4
        py-12
      "
    >
      {/* CONTENEUR GLOBAL CENTRÉ */}
      <div className="w-full max-w-6xl flex flex-col items-center gap-10">
        {/* TITRE */}
        <div className="text-center max-w-2xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-amber-500">
            Mes Compétences
          </h1>

          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            Toutes ces connaissances ont été acquises durant mes études en BTS
            SIO, mes projets personnels et mes expériences professionnelles.
          </p>
        </div>

        {/* FRONTEND */}
        <div className="w-full flex flex-col items-center gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold">FrontEnd</h1>

          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-5
              gap-3
              justify-items-center
            "
          >
            {skills.frontend.map((skill) => (
              <Card key={skill.id} name={skill.name} image={skill.image} />
            ))}
          </div>
        </div>

        {/* BACKEND */}
        <div className="w-full flex flex-col items-center gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold">BackEnd</h1>

          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
              gap-3
              justify-items-center
            "
          >
            {skills.backend.map((skill) => (
              <Card key={skill.id} name={skill.name} image={skill.image} />
            ))}
          </div>
        </div>

        {/* TOOLS */}
        <div className="w-full flex flex-col items-center gap-4">
          <h1 className="text-2xl sm:text-3xl font-bold">Outils & DevOps</h1>

          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-5
              gap-3
              justify-items-center
            "
          >
            {skills.tools.map((skill) => (
              <Card key={skill.id} name={skill.name} image={skill.image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competences;
