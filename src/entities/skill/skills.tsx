import {
  FaAws,
  FaConfluence,
  FaCss3Alt,
  FaDatabase,
  FaDocker,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
} from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiJira, SiNaver, SiPostman, SiSpring } from 'react-icons/si';

const FRONTEND = [
  {
    name: 'HTML',
    icon: <FaHtml5 className="h-full w-full text-orange-600" />,
    color: 'text-orange-600',
    category: 'FrontEnd',
    usage: 'frequent',
  },
  {
    name: 'CSS',
    icon: <FaCss3Alt className="h-full w-full text-blue-500" />,
    color: 'text-blue-500',
    category: 'FrontEnd',
    usage: 'frequent',
  },
  {
    name: 'JavaScript',
    icon: <FaJs className="h-full w-full text-yellow-400" />,
    color: 'text-yellow-400',
    category: 'FrontEnd',
    usage: 'frequent',
  },
  {
    name: 'TypeScript',
    icon: <FaJs className="h-full w-full text-blue-600" />,
    color: 'text-blue-600',
    category: 'FrontEnd',
    usage: 'frequent',
  },
  {
    name: 'React',
    icon: <FaReact className="h-full w-full text-cyan-500" />,
    color: 'text-cyan-500',
    category: 'FrontEnd',
    usage: 'frequent',
  },
  {
    name: 'NextJS',
    icon: <RiNextjsFill className="h-full w-full text-gray-800" />,
    color: 'text-gray-800',
    category: 'FrontEnd',
    usage: 'frequent',
  },
  {
    name: 'TailwindCss',
    icon: <RiTailwindCssFill className="h-full w-full text-sky-400" />,
    color: 'text-sky-400',
    category: 'FrontEnd',
    usage: 'frequent',
  },
];

const BACKEND = [
  {
    name: 'NodeJS (Express.js)',
    icon: <FaNodeJs className="h-full w-full text-green-500" />,
    color: 'text-green-500',
    category: 'BackEnd',
    usage: 'familiar',
  },
  {
    name: 'Spring',
    icon: <SiSpring className="h-full w-full text-[#6DB33F]" />,
    color: 'text-[#6DB33F]',
    category: 'BackEnd',
    usage: 'familiar',
  },
  {
    name: 'MySQL',
    icon: <FaDatabase className="h-full w-full text-blue-700" />,
    color: 'text-blue-700',
    category: 'BackEnd',
    usage: 'familiar',
  },
  {
    name: 'MongoDB',
    icon: <FaDatabase className="h-full w-full text-green-600" />,
    color: 'text-green-600',
    category: 'BackEnd',
    usage: 'familiar',
  },
  {
    name: 'Python',
    icon: <FaPython className="h-full w-full text-[#3776AB]" />,
    color: 'text-[#3776AB]',
    category: 'BackEnd',
    usage: 'familiar',
  },
];

const DEVOPS = [
  {
    name: 'Linux (Ubuntu)',
    icon: <FaDocker className="h-full w-full text-orange-500" />,
    color: 'text-orange-500',
    category: 'DevOps',
    usage: 'familiar',
  },
  {
    name: 'Docker',
    icon: <FaDocker className="h-full w-full text-blue-400" />,
    color: 'text-blue-400',
    category: 'DevOps',
    usage: 'familiar',
  },
  {
    name: 'AWS (EC2, S3, RDS)',
    icon: <FaAws className="h-full w-full text-orange-600" />,
    color: 'text-orange-600',
    category: 'DevOps',
    usage: 'familiar',
  },
  {
    name: 'NCP (Server)',
    icon: <SiNaver className="h-full w-full text-green-500" />,
    color: 'text-green-500',
    category: 'DevOps',
    usage: 'familiar',
  },
];

const COLLABORATION = [
  {
    name: 'Figma',
    icon: <FaFigma className="h-full w-full text-pink-500" />,
    color: 'text-pink-500',
    category: 'Tools',
    usage: 'frequent',
  },
  {
    name: 'Git / GitHub',
    icon: <FaGitAlt className="h-full w-full text-red-600" />,
    color: 'text-red-600',
    category: 'Tools',
    usage: 'frequent',
  },
  {
    name: 'Jira',
    icon: <SiJira className="h-full w-full text-[#0052CC]" />,
    color: 'text-[#0052CC]',
    category: 'Tools',
    usage: 'frequent',
  },
  {
    name: 'Confluence',
    icon: <FaConfluence className="h-full w-full text-[#172B4D]" />,
    color: 'text-[#172B4D]',
    category: 'Tools',
    usage: 'frequent',
  },
  {
    name: 'PostMan',
    icon: <SiPostman className="h-full w-full text-[#FF6C37]" />,
    color: 'text-[#FF6C37]',
    category: 'Tools',
    usage: 'frequent',
  },
];

export const SKILLS = {
  FRONTEND,
  BACKEND,
  DEVOPS,
  COLLABORATION,
};
