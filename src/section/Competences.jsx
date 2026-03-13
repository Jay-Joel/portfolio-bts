import Card from "../component/Card";
import { skills } from "../constants/index";

const Competences = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      
      <div>
        <h1 className="text-3xl text-center font-bold text-amber-500">
          Mes Compétences
        </h1>
        <br />
        <p className="text-sm text-slate-400 text-center">
          Toutes ces connaissances ont été acquises durant mes études en BTS SIO,
          mes projets personnels et mes expériences professionnelles.
        </p>
      </div>

      <br />

      {/* Frontend */}
      <h1 className="text-2xl font-bold">FrontEnd</h1>

      <div className="grid grid-cols-5 gap-4">
        {skills.frontend.map((skill) => (
          <Card
            key={skill.id}
            name={skill.name}
            image={skill.image}
          />
        ))}
      </div>

      <br />

      {/* Backend */}
      <h1 className="text-2xl font-bold">BackEnd</h1>
      <div className="grid grid-cols-2 gap-4">
        {skills.backend.map((skill) => (
          <Card
            key={skill.id}
            name={skill.name}
            image={skill.image}
          />
        ))}
      </div>

      <br />

      {/* Tools */}
      <h1 className="text-2xl font-bold">Outils & DevOps</h1>
      <div className="grid grid-cols-3 gap-4">
        {skills.tools.map((skill) => (
          <Card
            key={skill.id}
            name={skill.name}
            image={skill.image}
          />
        ))}
      </div>

    </div>
  );
};

export default Competences;