import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiLua } from "react-icons/si";

export const skillsData = [
  { name: "Html + Css", icon: <FaHtml5 className="text-red-500" /> },
  { name: "Javascript", icon: <FaJs className="text-yellow-500" /> },
  { name: "Typescript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "React", icon: <FaReact className="text-teal-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Lua", icon: <SiLua className="text-blue-400" /> },
  { name: "MySql", icon: <FaDatabase className="text-orange-600" /> }
];