import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { href: "#hero", label: "Accueil" },
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#projets", label: "Projets" },
  { href: "#parcours", label: "Expériences Professionnelles" },
  { href: "#veille", label: "Veille" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  // Scroll vers la section
  const handleClick = (href) => {
    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setActiveSection(href);
      setIsOpen(false);
    }
  };

  // Détecte la section visible lors du scroll
  useEffect(() => {
    const handleScroll = () => {
      for (let item of [...NAV_ITEMS].reverse()) {
        const section = document.querySelector(item.href);

        if (section && section.getBoundingClientRect().top <= 150) {
          setActiveSection(item.href);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 py-1 shadow-lg shadow-black/30">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => handleClick("#hero")}
          className="text-2xl font-bold"
        >
          <span className="text-orange-500">&lt;</span>

          <span> MDJJ </span>

          <span className="text-orange-500">/&gt;</span>
        </button>

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex items-center gap-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleClick(item.href)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${
                activeSection === item.href
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                  : "text-slate-300 hover:text-white hover:bg-slate-800"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Bouton burger mobile */}
        <button
          className="lg:hidden text-slate-200 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800">
          <nav className="flex flex-col p-4 gap-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleClick(item.href)}
                className={`text-left px-4 py-3 rounded-lg transition
                ${
                  activeSection === item.href
                    ? "bg-orange-500 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
