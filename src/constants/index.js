// src/constants/index.js
import HTML5 from "../assets/image/html5.svg";
import CSS3 from "../assets/image/css3.svg";
import JS from "../assets/image/javascript.svg";
import ReactLogo from "../assets/image/react.svg";
import Tailwind from "../assets/image/tailwind.svg";

import PHP from "../assets/image/php.svg";
import MySQL from "../assets/image/mysql.svg";

import Git from "../assets/image/git.svg";
import GitHub from "../assets/image/github.svg";
import VSCode from "../assets/image/vscode.svg";

export const skills = {
  frontend: [
    { id: 1, name: "HTML5", image: HTML5 },
    { id: 2, name: "CSS3", image: CSS3 },
    { id: 3, name: "JavaScript", image: JS },
    { id: 4, name: "React", image: ReactLogo },
    { id: 5, name: "Tailwind CSS", image: Tailwind },
  ],
  backend: [
    { id: 1, name: "PHP", image: PHP },
    { id: 2, name: "MySQL", image: MySQL },
  ],
  tools: [
    { id: 1, name: "Git", image: Git },
    { id: 2, name: "GitHub", image: GitHub },
    { id: 3, name: "VS Code", image: VSCode },
  ],
};