const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl text-center text-align:center font-bold text-amber-500">
        À propos de moi
      </h1>
      <br />
      <p className="font-sm text-sm text-slate-400">
        Découvrez mon parcours, ma formation et mes aspirations
        professionnelles.
      </p>
      <br />

      {/*Left : Avatar & Right : Text*/}

      <div class="flex flex-row items-center justify-center">
        <div class="basis-1/3">
          <div class="flex-1 flex items-center justify-center">
            <img
              className="rounded-full"
              src="https://cdn.pfps.gg/pfps/8266-eggman.png"
              alt="image"
            />
          </div>
        </div>
        <div class="basis-1/3">
          <h1 className="text-3xl font-bold">
            Salut, moi c'est <span className="text-amber-500">Jay Joël</span> !
          </h1>
          <br />
          <p className="text-slate-300">
            Étudiant passionné en BTS SIO option SLAM, je me spécialise dans le
            développement d'applications web modernes. Mon objectif est de créer
            des solutions innovantes et performantes.
          </p>
          <br />
          <p className="text-sm text-slate-400">
            Actuellement à la recherche d'une alternance, je suis motivé à
            apprendre et à contribuer au sein d'une équipe dynamique. Ma
            curiosité et ma rigueur me poussent à toujours améliorer mes
            compétences.
          </p>

          {/*Info card*/}
        </div>
      </div>
      <br />

      <h1 className="text-2xl text-center text-align:center font-bold text-white">
        Qu'est-ce que le BTS SIO ?
      </h1>
      <br />
      <p className="text-center text-sm text-slate-400">
        Le Brevet de Technicien Supérieur aux Services Informatiques aux
        Organisations forme en deux ans aux
        <br />
        métiers de l'informatique, avec une insertion professionnelle rapide ou
        une poursuite d'études.
      </p>
      <br />

      {/*Card to describe BTS SIO options*/}
      <div class="flex flex-row items-center justify-center space-x-5">
        <div class="basis-1/3">
          <div class="relative flex flex-col my-6 bg-slate-500/10 shadow-sm border border-slate-500/20 rounded-lg hover:border-orange-600 w-96 hover:scale-102 transition-transform size-40">
            <div class="p-4">
              <h5 class="mb-2 text-white text-xl font-semibold">Option SISR</h5>
              <p class="text-slate-400 leading-normal font-light">
                Formation axée sur la conception, l&apos;installation,
                l&apos;administration et la sécurisation des infrastructures
                informatiques.
              </p>
            </div>
          </div>
        </div>

        <div class="basis-1/3">
          <div class="relative flex flex-col my-6 bg-slate-500/10 shadow-sm border border-slate-500/20 hover:border-orange-600 rounded-lg w-96 hover:scale-102 transition-transform size-40">
            <div class="p-4">
              <h5 class="mb-2 text-white text-xl font-semibold">Option SLAM</h5>
              <p class="text-slate-400 leading-normal font-light">
                Formation orientée développement d&apos;applications web,
                mobiles et métiers, gestion de bases de données et maintenance
                logicielle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
