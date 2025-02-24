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
    icon: <FaHtml5 className="w-full h-full text-orange-600" />,
    category: "FrontEnd",
    usage: ["frequent"],
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="w-full h-full text-blue-500" />,
    category: "FrontEnd",
    usage: ["frequent"],
  },
  {
    name: "JavaScript",
    icon: <FaJs className="w-full h-full text-yellow-400" />,
    category: "FrontEnd",
    usage: ["frequent"],
  },
  {
    name: "TypeScript",
    icon: <FaJs className="w-full h-full text-blue-600" />,
    category: "FrontEnd",
    usage: ["familiar"],
  },
  {
    name: "React",
    icon: <FaReact className="w-full h-full text-cyan-500" />,
    category: "FrontEnd",
    usage: ["frequent"],
  },
  {
    name: "NextJS",
    icon: <FaReact className="w-full h-full text-gray-800" />,
    category: "FrontEnd",
    usage: ["familiar"],
  },
  {
    name: "NodeJS (Express.js)",
    icon: <FaNodeJs className="w-full h-full text-green-500" />,
    category: "BackEnd",
    usage: ["frequent"],
  },
  {
    name: "MySQL",
    icon: <FaDatabase className="w-full h-full text-blue-700" />,
    category: "BackEnd",
    usage: ["familiar"],
  },
  {
    name: "MongoDB",
    icon: <FaDatabase className="w-full h-full text-green-600" />,
    category: "BackEnd",
    usage: ["familiar"],
  },
  {
    name: "Linux (Ubuntu)",
    icon: <FaDocker className="w-full h-full text-orange-500" />,
    category: "OS",
    usage: ["familiar"],
  },
  {
    name: "Docker",
    icon: <FaDocker className="w-full h-full text-blue-400" />,
    category: "Cloud",
    usage: ["familiar"],
  },
  {
    name: "AWS (EC2, S3, RDS)",
    icon: <FaAws className="w-full h-full text-orange-600" />,
    category: "Cloud",
    usage: ["familiar"],
  },
  {
    name: "NCP (Server)",
    icon: <SiNaver className="w-full h-full text-green-500" />,
    category: "Cloud",
    usage: ["familiar"],
  },
  {
    name: "Figma",
    icon: <FaFigma className="w-full h-full text-pink-500" />,
    category: "Tools",
    usage: ["frequent"],
  },
  {
    name: "Git / GitHub",
    icon: <FaGitAlt className="w-full h-full text-red-600" />,
    category: "Tools",
    usage: ["frequent"],
  },
];