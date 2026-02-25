const Projets = () => {
  return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div>
            <h1 className="text-3xl text-center text-align:center font-bold text-amber-500">Mes Projets</h1>
            <br/>
            <p className="font-sm text-sm text-slate-400">
            Découvrez les projets que j'ai réalisés durant ma formation et mes expériences professionnelles.
            </p>
        </div>
          {/* Tous les projets documentés avec capture d'écran */}
          

          {/*Liens GitHub vers le code source*/}
                <div class="flex flex-row items-center justify-center space-x-5">
        <div class="basis-1/3">
          <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
            <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img src="https://cdn.pfps.gg/pfps/8266-eggman.png" alt="card-image" />
          </div>
          <div class="p-4">
            <h6 class="mb-2 text-slate-800 text-xl font-semibold">
              Projet 1
            </h6>
            <p class="text-slate-600 leading-normal font-light">
              Description du projet...
            </p>
          </div>
          <div class="px-4 pb-4 pt-0 mt-2">
            <button class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              Read more
          </button>
          </div>
          </div> 
        </div>

        <div class="basis-1/3">
        <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
          <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
            <img src="https://cdn.pfps.gg/pfps/8266-eggman.png" alt="card-image" />
          </div>
          <div class="p-4">
            <h6 class="mb-2 text-slate-800 text-xl font-semibold">
              Projet 2
            </h6>
            <p class="text-slate-600 leading-normal font-light">
              Description du projet...
            </p>
          </div>
          <div class="px-4 pb-4 pt-0 mt-2">
            <button class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              Read more
          </button>
          </div>
          </div> 
        </div>
          
        <div class="basis-1/3">
          <div class="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
            <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
              <img src="https://cdn.pfps.gg/pfps/8266-eggman.png" alt="card-image" />
          </div>
          <div class="p-4">
            <h6 class="mb-2 text-slate-800 text-xl font-semibold">
              Projet 3
            </h6>
            <p class="text-slate-600 leading-normal font-light">
              Description du projet...
            </p>
          </div>
          <div class="px-4 pb-4 pt-0 mt-2">
            <button class="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
              Read more
          </button>
          </div>
          </div> 
        </div>

          {/*Tableau de synthèse des compétences COMPLET*/}


      </div>
      </div>
  );
};

export default Projets;
