const About = () => {
  return (
    <section
      className="
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        px-4
        sm:px-6
        md:px-10
        py-16
      "
    >
      {/* TITRE */}
      <h1
        className="
          text-3xl
          sm:text-4xl
          text-center
          font-bold
          text-amber-500
        "
      >
        À propos de moi
      </h1>

      <p
        className="
          mt-4
          text-sm
          sm:text-base
          text-slate-400
          text-center
          max-w-2xl
        "
      >
        Découvrez mon parcours, ma formation et mes aspirations
        professionnelles.
      </p>

      {/* SECTION PROFIL */}
      <div
        className="
          mt-14
          flex
          flex-col
          lg:flex-row
          items-center
          justify-center
          gap-10
          max-w-6xl
          w-full
        "
      >
        {/* IMAGE */}
        <div className="flex justify-center">
          <img
            className="
              rounded-full
              w-52
              h-52
              sm:w-64
              sm:h-64
              object-cover
              border-4
              border-amber-500
            "
            src="https://t4.ftcdn.net/jpg/07/72/57/19/360_F_772571913_XkQYqda1XTYBadqaFNh72abqZkEsajEe.jpg"
            alt="image"
          />
        </div>

        {/* TEXTE */}
        <div className="max-w-2xl text-center lg:text-left">
          <h1
            className="
              text-2xl
              sm:text-3xl
              font-bold
            "
          >
            Salut, moi c&apos;est{" "}
            <span className="text-amber-500">Jay Joël</span> !
          </h1>

          <p
            className="
              mt-6
              text-slate-300
              text-sm
              sm:text-base
              leading-relaxed
            "
          >
            Étudiant passionné en BTS SIO option SLAM, je me spécialise dans le
            développement d&apos;applications web modernes. Mon objectif est de
            créer des solutions innovantes et performantes.
          </p>

          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            Actuellement à la recherche d&apos;une alternance, je suis motivé à
            apprendre et à contribuer au sein d&apos;une équipe dynamique. Ma
            curiosité et ma rigueur me poussent à toujours améliorer mes
            compétences.
          </p>
        </div>
      </div>

      {/* BTS SIO */}
      <div className="mt-20 text-center max-w-4xl">
        <h1
          className="
            text-2xl
            sm:text-3xl
            font-bold
            text-white
          "
        >
          Qu&apos;est-ce que le BTS SIO ?
        </h1>

        <p
          className="
            mt-6
            text-sm
            sm:text-base
            text-slate-400
            leading-relaxed
          "
        >
          Le Brevet de Technicien Supérieur aux Services Informatiques aux
          Organisations forme en deux ans aux métiers de l&apos;informatique,
          avec une insertion professionnelle rapide ou une poursuite
          d&apos;études.
        </p>
      </div>

      {/* CARDS */}
      <div
        className="
          mt-14
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
          max-w-6xl
          w-full
        "
      >
        {/* SISR */}
        <div
          className="
            bg-slate-500/10
            shadow-sm
            border
            border-slate-500/20
            rounded-lg
            hover:border-orange-600
            transition-all
            duration-300
            hover:scale-105
            p-8
            min-h-[520px]
          "
        >
          <h5 className="text-white text-xl font-semibold">Option SISR</h5>

          <div className="space-y-6 mt-4">
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              L&apos;option{" "}
              <span className="font-semibold text-white">
                Solution d&apos;infrastructure, systèmes et réseaux (SISR)
              </span>{" "}
              forme des professionnels des réseaux et équipements informatiques
              (installation, maintenance, sécurité).
            </p>

            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              En sortant d&apos;un{" "}
              <span className="font-semibold text-white">BTS SIO SISR</span>,
              vous serez capables de gérer et d&apos;administrer le réseau
              d&apos;une société et d&apos;assurer sa sécurité et sa
              maintenance.
            </p>

            <div>
              <p className="text-slate-300 mb-3 text-sm sm:text-base">
                Les techniciens supérieurs en informatique option SISR peuvent
                accéder aux métiers de :
              </p>

              <ul className="space-y-2 text-slate-400 list-disc list-inside text-sm sm:text-base">
                <li>Administrateur systèmes et réseaux</li>
                <li>Informaticien support et déploiement</li>
                <li>Pilote d&apos;exploitation</li>
                <li>Support systèmes et réseaux</li>
                <li>Technicien d&apos;infrastructure</li>
                <li>Technicien de production</li>
                <li>Technicien micro et réseaux</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SLAM */}
        <div
          className="
            bg-slate-500/10
            shadow-sm
            border
            border-slate-500/20
            rounded-lg
            hover:border-orange-600
            transition-all
            duration-300
            hover:scale-105
            p-8
            min-h-[520px]
          "
        >
          <h5 className="text-white text-xl font-semibold">Option SLAM</h5>

          <div className="space-y-6 mt-4">
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              L&apos;option{" "}
              <span className="font-semibold text-white">
                Solutions logicielles et applications métiers
              </span>{" "}
              forme des spécialistes des logiciels (rédaction d&apos;un cahier
              des charges, formulation des besoins et spécifications,
              développement, intégration au sein de la société).
            </p>

            <div>
              <p className="text-slate-300 mb-3 text-sm sm:text-base">
                Les techniciens supérieurs en informatique option SLAM sont
                préparés aux métiers de :
              </p>

              <ul className="space-y-2 text-slate-400 list-disc list-inside text-sm sm:text-base">
                <li>Développeur d&apos;applications informatiques</li>
                <li>Développeur informatique</li>
                <li>Analyste d&apos;applications ou d&apos;études</li>
                <li>Analyste programmeur</li>
                <li>Programmeur analyste</li>
                <li>Programmeur d&apos;applications</li>
                <li>Responsable des services applicatifs</li>
                <li>Technicien d&apos;études informatiques</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
