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
  // ✅ 프론트엔드
  {
    name: "HTML",
    icon: <FaHtml5 className="w-full h-full text-orange-600" />,
    color: "text-orange-600",
    category: "FrontEnd",
    usage: "frequent",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="w-full h-full text-blue-500" />,
    color: "text-blue-500",
    category: "FrontEnd",
    usage: "frequent",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="w-full h-full text-yellow-400" />,
    color: "text-yellow-400",
    category: "FrontEnd",
    usage: "frequent",
  },
  {
    name: "TypeScript",
    icon: <FaJs className="w-full h-full text-blue-600" />,
    color: "text-blue-600",
    category: "FrontEnd",
    usage: "frequent",
  },
  {
    name: "React",
    icon: <FaReact className="w-full h-full text-cyan-500" />,
    color: "text-cyan-500",
    category: "FrontEnd",
    usage: "frequent",
  },
  {
    name: "NextJS",
    icon: <FaReact className="w-full h-full text-gray-800" />,
    color: "text-gray-800",
    category: "FrontEnd",
    usage: "frequent",
  },

  // ✅ 백엔드
  {
    name: "NodeJS (Express.js)",
    icon: <FaNodeJs className="w-full h-full text-green-500" />,
    color: "text-green-500",
    category: "BackEnd",
    usage: "familiar",
  },
  {
    name: "MySQL",
    icon: <FaDatabase className="w-full h-full text-blue-700" />,
    color: "text-blue-700",
    category: "BackEnd",
    usage: "familiar",
  },
  {
    name: "MongoDB",
    icon: <FaDatabase className="w-full h-full text-green-600" />,
    color: "text-green-600",
    category: "BackEnd",
    usage: "familiar",
  },

  // ✅ DevOps (클라우드 & OS 포함)
  {
    name: "Linux (Ubuntu)",
    icon: <FaDocker className="w-full h-full text-orange-500" />,
    color: "text-orange-500",
    category: "DevOps",
    usage: "familiar",
  },
  {
    name: "Docker",
    icon: <FaDocker className="w-full h-full text-blue-400" />,
    color: "text-blue-400",
    category: "DevOps",
    usage: "familiar",
  },
  {
    name: "AWS (EC2, S3, RDS)",
    icon: <FaAws className="w-full h-full text-orange-600" />,
    color: "text-orange-600",
    category: "DevOps",
    usage: "familiar",
  },
  {
    name: "NCP (Server)",
    icon: <SiNaver className="w-full h-full text-green-500" />,
    color: "text-green-500",
    category: "DevOps",
    usage: "familiar",
  },

  // ✅ 툴 (협업, 생산성 도구)
  {
    name: "Figma",
    icon: <FaFigma className="w-full h-full text-pink-500" />,
    color: "text-pink-500",
    category: "Tools",
    usage: "frequent",
  },
  {
    name: "Git / GitHub",
    icon: <FaGitAlt className="w-full h-full text-red-600" />,
    color: "text-red-600",
    category: "Tools",
    usage: "frequent",
  },
];