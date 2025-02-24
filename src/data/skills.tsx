import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaAws,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";
import { SiNaver } from "react-icons/si";


export const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
    category: "FrontEnd",
    usage: ["frequent"], // 자주 사용
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    category: "FrontEnd",
    usage: ["frequent"],
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    category: "FrontEnd",
    usage: ["frequent"],
  },
  {
    name: "TypeScript",
    icon: <FaJs />,
    category: "FrontEnd",
    usage: ["familiar"], // 사용해봤어요
  },
  {
    name: "React",
    icon: <FaReact />,
    category: "FrontEnd",
    usage: ["frequent"],
  },
  {
    name: "NextJS",
    icon: <FaReact />,
    category: "FrontEnd",
    usage: ["familiar"],
  },
  {
    name: "NodeJS (Express.js)",
    icon: <FaNodeJs />,
    category: "BackEnd",
    usage: ["frequent"],
  },
  {
    name: "MySQL",
    icon: <FaDatabase />,
    category: "BackEnd",
    usage: ["familiar"],
  },
  {
    name: "MongoDB",
    icon: <FaDatabase />,
    category: "BackEnd",
    usage: ["familiar"],
  },
  {
    name: "Linux (Ubuntu)",
    icon: <FaDocker />,
    category: "OS",
    usage: ["familiar"],
  },
  {
    name: "Docker",
    icon: <FaDocker />,
    category: "Cloud",
    usage: ["familiar"],
  },
  {
    name: "AWS (EC2, S3, RDS)",
    icon: <FaAws />,
    category: "Cloud",
    usage: ["familiar"],
  },
  {
    name: "NCP (Server)",
    icon: <SiNaver />,
    category: "Cloud",
    usage: ["familiar"],
  },
  {
    name: "Figma",
    icon: <FaFigma />,
    category: "Tools",
    usage: ["frequent"],
  },
  {
    name: "Git / GitHub",
    icon: <FaGitAlt />,
    category: "Tools",
    usage: ["frequent"],
  },
];