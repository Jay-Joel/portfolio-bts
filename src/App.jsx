import Navbar from "./component/Navbar";
import Hero from "./section/Hero";
import About from "./section/About";
import Parcours from "./section/Parcours";
import Projets from "./section/Projets";
import Competences from "./section/Competences";
import VeilleTechno from "./section/VeilleTechno";
import Contact from "./section/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <main className="bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100">
      <Navbar />
      <Hero />
      <About />
      <Parcours />
      <Projets />
      <Competences />
      <VeilleTechno />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
