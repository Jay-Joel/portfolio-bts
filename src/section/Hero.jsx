import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl text-center text-align:center font-bold">
        Jay Joël
      </h1>
      <h1 className="text-3xl text-center text-align:center font-bold text-amber-500">
        MASSAMBA DIMONEKENE
      </h1>
      <br/>
      <TypeAnimation
        sequence={[
          "Développeur Web",
          2000,
          "Étudiant BTS SIO",
          2000,
          "Passionné de Tech",
          2000,
          "Futur Alternant",
          2000,
        ]}
        wrapper="span"
        speed={10}
        className="text-2xl italic text-white"
        repeat={Infinity}
      />
      <br/>
      <p class="text-center text-align: center text-sm text-slate-400">
        Étudiant en BTS SIO Option SLAM, passionné par le développement <br/>en tout
        genre que cela soit le jeu vidéo, le web ou les applications.
      </p>
      <br/>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl">
        Mon CV
      </button>
    </div>
  );
};

export default Hero;
