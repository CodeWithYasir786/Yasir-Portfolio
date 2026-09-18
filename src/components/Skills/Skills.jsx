// Skills.jsx
import imgIcon from "./icon.svg";
import fw from "./frontEndDev.png";
import programmer from "./programmer.png";

const skillsData =[
{
icon: fw,
title: "React Developer",
description: "I enjoy turning ideas into clean, responsive, and interactive web applications using React and modern frontend technologies.",
subSkillLabel: "Technologies I work with:",
subSkillList: "HTML, CSS, JavaScript, React, Tailwind CSS",
toolsLabel: "Dev Tools",
tools: ["React", "Vite", "React Router", "Context API", "Tailwind CSS", "Git", "GitHub", "VS Code"]
},

{
icon: programmer,
title: "Problem Solver",
description: "I enjoy breaking down complex problems, building logical solutions, and using programming to solve real-world challenges.",
subSkillLabel: "Things I enjoy solving:",
subSkillList: "DSA, Algorithms, Logic Building, Real-World Problems",
toolsLabel: "Problem Solving",
tools: ["Data Structures", "Algorithms", "Java", "C++", "LeetCode", "OOP", "Logic Building"]
},

{
icon: imgIcon,
title: "Future Full-Stack Developer",
description: "I'm continuously expanding my skills beyond frontend development to build complete, scalable, and AI-powered software solutions.",
subSkillLabel: "Currently exploring:",
subSkillList: "Backend, APIs, Databases, AI Integration",
toolsLabel: "Future Skills",
tools: ["Node.js", "Express.js", "MongoDB", "REST APIs", "AI APIs", "System Design"]
}
];


function Skills() {
  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-transparent">
      {skillsData.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300"
        >
          {/* Icon */}
          <img src={skill.icon} className="h-14 w-14 object-contain mt-2 mb-4" alt={skill.title} />

          {/* Title */}
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{skill.title}</h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-4">{skill.description}</p>

          <div className="w-8 h-0.5 bg-purple-400 rounded mb-4" />

          {/* Sub skills */}
          <div className="mb-4 w-full">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-500 mb-1">
              {skill.subSkillLabel}
            </p>
            <p className="text-sm text-gray-600">{skill.subSkillList}</p>
          </div>

          {/* Tools */}
          <div className="w-full">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-500 mb-2">
              {skill.toolsLabel}
            </p>
            <ul className="flex flex-wrap justify-center gap-2">
              {skill.tools.map((tool, i) => (
                <li
                  key={i}
                  className="text-xs bg-purple-50 text-purple-700 border border-purple-200 rounded-full px-3 py-1"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;