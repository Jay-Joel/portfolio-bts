import Navbar from "./component/Navbar";
import Hero from "./section/Hero";
import About from "./section/About";
import Parcours from "./section/Parcours";
import Projets from "./section/Projets";
import Competences from "./section/Competences";
import VeilleTechno from "./section/VeilleTechno";
import Contact from "./section/Contact";
import Footer from "./component/Footer.jsx";

function App() {
  return (
    <main className="bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100">
      <Navbar />

      {/* Chaque section doit avoir un id correspondant au href de la navbar */}
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Competences />
      </section>

      <section id="projets">
        <Projets />
      </section>

      <section id="parcours">
        <Parcours />
      </section>

      <section id="veille">
        <VeilleTechno />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}

export default App;
