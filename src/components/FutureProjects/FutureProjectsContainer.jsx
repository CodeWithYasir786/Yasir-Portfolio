import FutureProjectCard from "./FutureProjectCard";
import img1 from "./1sp.svg";
import img2 from "./2sp.svg";
import img3 from "./3sp.svg";
import img4 from "./4sp.svg";
import img5 from "./5sp.svg";
import img6 from "./6sp.svg";
import imgFirst from "./smart.png"
import BizManager from "./BizManager.png"
import taskflow_ai_logo from "./taskflow_ai_logo.svg"
import algoviz_logo from "./algoviz_logo.svg"
import gemini_svg from "./gemini-svg.svg"
import my_Startup from "./my_Startup.svg"
const projects = [
{
id: 1,
img: imgFirst,
name: "SmartPayroll",
tag: "SaaS / HR",
para: "An intelligent payroll platform designed to simplify employee and salary management."
},

{
id: 2,
img: BizManager,
name: "BusinessFlow",
tag: "Business / SaaS",
para: "A practical business management platform built to solve everyday company challenges."
},

{
id: 3,
img: taskflow_ai_logo,
name: "AI Assistant",
tag: "AI / Automation",
para: "AI-powered tools designed to automate repetitive tasks and improve productivity."
},

{
id: 4,
img: algoviz_logo,
name: "DSA Visualizer",
tag: "Java / DSA",
para: "An interactive Java GUI for visualizing data structures and understanding algorithms."
},

{
id: 5,
img: gemini_svg,
name: "ProblemHub",
tag: "Coding / DSA",
para: "A platform for practicing programming problems and improving logical problem-solving skills."
},

{
id: 6,
img: my_Startup,
name: "My Startup",
tag: "Future / Startup",
para: "A future technology product focused on solving meaningful real-world problems."
}
];


function FutureProjectsContainer({ onStartupCon }) {
  return (
    <div className="flex flex-col items-center">
      {/* Purple intro banner */}
      <div className="bg-[#6e07f3] w-full min-h-[70vh] flex flex-col justify-center items-center gap-6 px-6 sm:px-12 md:px-24 lg:px-40 py-20 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">
          My Startup Projects
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-purple-100 max-w-2xl leading-relaxed">
          I’m passionate about building digital products that solve real-world
          problems. I want to create simple and useful solutions for businesses
          and everyday users. My goal is to turn ideas into products that make
          work easier and more efficient. I’m continuously improving my
          development, problem-solving, and AI skills. In the future, I aim to
          build and grow my own technology startup.
        </p>
      </div>

      {/* Cards pulled up over the banner */}
      <div className="w-full px-4 sm:px-8 lg:px-16 -mt-12 z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <FutureProjectCard
              key={project.id}
              img={project.img}
              name={project.name}
              tag={project.tag}
              para={project.para}
            />
          ))}
        </div>
      </div>
      <div className="text-center mt-8 mb-5 ">
        <h2 className="text-2xl my-4 mb-5 font-semibold">
          Interested in collaborating with me?
        </h2>
        <p className="text-base font-normal">
          I'm always open to discussing product design work or partnership
          opportunities.
        </p>
        <button onClick={onStartupCon} className="mt-5 px-5 py-2.5 rounded-3xl border-2 border-[#6e07f3] text-[#6e07f3] bg-white text-[1.1rem] cursor-pointer transition-all duration-300 ease-in-out hover:text-white hover:bg-[#6e07f3]">
          Start A Conversation
        </button>
      </div>
      <br />
    </div>
  );
}

export default FutureProjectsContainer;
// import FutureProjectCard from "./FutureProjectCard";
// import img1 from "./1sp.svg";
// import img2 from "./2sp.svg";
// import img3 from "./3sp.svg";
// import img4 from "./4sp.svg";
// import img5 from "./5sp.svg";
// import img6 from "./6sp.svg";

// const projects = [
//   { id: 1, img: img1, name: "LogoCraft",    tag: "Design Tool",   para: "Affordable, human-crafted logos for startups and indie projects." },
//   { id: 2, img: img2, name: "SprintBoard",  tag: "Productivity",  para: "Lightweight project management for solo founders and small teams." },
//   { id: 3, img: img3, name: "PitchDeck AI", tag: "AI / Slides",   para: "Generate investor-ready pitch decks in minutes with AI assistance." },
//   { id: 4, img: img4, name: "FontPairer",   tag: "Typography",    para: "Discover beautiful font pairings for your next digital product." },
//   { id: 5, img: img5, name: "LaunchPad",    tag: "Landing Pages", para: "Deploy stunning landing pages for your startup in under 10 minutes." },
//   { id: 6, img: img6, name: "DevDiary",     tag: "Blogging",      para: "A minimal writing platform built specifically for developer blogs." },
// ];

// function FutureProjectsContainer() {
//   return (
//     <div className="min-h-screen bg-stone-50 font-serif">

//       {/* ── Hero Banner — extra pb-32 creates space the cards will slide into ── */}
//       <div className="relative overflow-visible bg-gradient-to-br from-[#0f0120] via-[#2d0868] to-[#6e07f3] px-6 sm:px-12 md:px-20 lg:px-32 pt-24 lg:pt-36 pb-32 text-center">

//         {/* Decorative concentric rings */}
//         {[160, 320, 480, 640].map((size, i) => (
//           <div
//             key={i}
//             className="absolute rounded-full border border-white/[0.06] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 pointer-events-none"
//             style={{ width: size, height: size }}
//           />
//         ))}

//         {/* Eyebrow label */}
//         <p className="relative z-10 text-[11px] font-bold tracking-[0.25em] uppercase text-violet-300 mb-5 font-sans">
//           Portfolio
//         </p>

//         {/* Heading */}
//         <h1 className="relative z-10 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] tracking-tighter mb-6">
//           My Startup
//           <br />
//           <span className="text-violet-300">Projects</span>
//         </h1>

//         {/* Subtext */}
//         <p className="relative z-10 text-base sm:text-lg text-violet-200 max-w-xl mx-auto leading-relaxed mb-12">
//           I'm a bit of a digital product junky. Over the years I've used hundreds of web and mobile apps — eventually I decided to build my own.
//         </p>

//         {/* Stats strip */}
//         <div className="relative z-10 flex justify-center gap-10 sm:gap-16 flex-wrap">
//           {[["6", "Projects"], ["3", "Live"], ["∞", "Ideas"]].map(([num, label]) => (
//             <div key={label} className="text-center">
//               <div className="text-3xl sm:text-4xl font-black text-white tracking-tighter">{num}</div>
//               <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-violet-400 mt-1 font-sans">{label}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ── Cards Grid — pulled up with -mt-24 to overlap hero's pb-32 bottom ── */}
//       <div className="relative z-20 max-w-6xl mx-auto px-5 sm:px-10 lg:px-12 -mt-24">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {projects.map((project) => (
//             <FutureProjectCard
//               key={project.id}
//               img={project.img}
//               name={project.name}
//               tag={project.tag}
//               para={project.para}
//             />
//           ))}
//         </div>
//       </div>

//       {/* ── Bottom spacing ── */}
//       <div className="pb-20" />

//     </div>
//   );
// }

// export default FutureProjectsContainer;
