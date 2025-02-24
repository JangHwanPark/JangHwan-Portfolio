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
    category: "FrontEnd"
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    category: "FrontEnd"
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    category: "FrontEnd"
  },
  {
    name: "TypeScript",
    icon: <FaJs />,
    category: "FrontEnd"
  },
  {
    name: "React",
    icon: <FaReact />,
    category: "FrontEnd"
  },
  {
    name: "NextJS",
    icon: <FaReact />,
    category: "FrontEnd"
  },
  {
    name: "NodeJS (Express.js)",
    icon: <FaNodeJs />,
    category: "BackEnd"
  },
  {
    name: "MySQL",
    icon: <FaDatabase />,
    category: "BackEnd"
  },
  {
    name: "MongoDB",
    icon: <FaDatabase />,
    category: "BackEnd"
  },
  {
    name: "Linux (Ubuntu)",
    icon: <FaDocker />,
    category: "OS"
  },
  {
    name: "Docker",
    icon: <FaDocker />,
    category: "Cloud"
  },
  {
    name: "AWS (EC2, S3, RDS)",
    icon: <FaAws />,
    category: "Cloud"
  },
  {
    name: "NCP (Server)",
    icon: <SiNaver />,
    category: "Cloud"
  },
  {
    name: "Figma",
    icon: <FaFigma />,
    category: "Tools"
  },
  {
    name: "Git / GitHub",
    icon: <FaGitAlt />,
    category: "Tools"
  },
];