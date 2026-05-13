const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { href: "#hero", label: "Accueil" },
    { href: "#about", label: "À propos" },
    { href: "#skills", label: "Compétences" },
    { href: "#parcours", label: "Parcours" },
    { href: "#projets", label: "Projets" },
    { href: "#veille", label: "Veille Techno" },
    { href: "#contact", label: "Contact" },
  ];

  const contacts = [
    {
      label: "Email",
      value: "massambajayjoel@hotmail.com",
      href: "mailto:massambajayjoel@hotmail.com",
      icon: "📧",
    },
    {
      label: "GitHub",
      value: "github.com/Jay-Joel",
      href: "https://github.com/Jay-Joel",
      icon: "🐙",
    },
  ];

  return (
    <footer className="relative py-12 px-6 border-t border-white/10 mt-20">
      {/* gradient background */}
      <div className="absolute inset-0 bg-linear-to-t from-slate-950 to-transparent pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* TOP FOOTER */}
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Logo + description */}
          <div className="space-y-4">
            <a
              href="#hero"
              className="text-2xl font-bold flex items-center gap-2 group"
            >
              <span className="text-blue-400 group-hover:scale-110 transition-transform">
                &lt;
              </span>

              <span>MDJJ</span>

              <span className="text-blue-400 group-hover:scale-110 transition-transform">
                /&gt;
              </span>
            </a>

            <p className="text-slate-400 text-sm leading-relaxed">
              Étudiant en BTS SIO option SLAM, passionné par le développement
              web, React et les nouvelles technologies.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Navigation</h4>

            <nav className="grid grid-cols-2 gap-2">
              {navigation.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 text-sm hover:text-blue-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Me contacter</h4>

            <div className="space-y-3">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 text-sm hover:text-blue-400 transition-colors group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">
                    {contact.icon}
                  </span>

                  <span>{contact.value}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-slate-500 text-sm text-center md:text-left">
            © {currentYear} Jay Joël MASSAMBA DIMONEKENE. Tous droits réservés.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">

            <a
              href="https://github.com/tonpseudo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-400 transition-all group"
            >
              <span className="text-lg group-hover:scale-110 transition-transform">
                🐙
              </span>
            </a>

            <a
              href="mailto:tonemail@gmail.com"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-400 transition-all group"
            >
              <span className="text-lg group-hover:scale-110 transition-transform">
                📧
              </span>
            </a>

          </div>

        </div>

        {/* Footer message */}
        <p className="text-center text-slate-600 text-xs mt-6">
          Fait avec ❤️, React et Tailwind CSS
        </p>

      </div>
    </footer>
  );
};

export default Footer;