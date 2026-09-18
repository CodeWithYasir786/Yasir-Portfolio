// Intro.jsx
import Skills from "./Skills";

function Intro() {
  return (
    <div className="flex flex-col items-center">
      
      {/* Purple intro banner */}
      <div className="bg-[#6e07f3] w-full min-h-[70vh] flex flex-col justify-center items-center gap-6 px-6 sm:px-12 md:px-24 lg:px-40 py-20 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">
          Hi, I am Yasir. Nice to Meet You
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-purple-100 max-w-2xl leading-relaxed">
          My journey in software development has been driven by curiosity, problem-solving, and a passion for turning real-world challenges into practical digital solutions. I specialize in building modern, responsive web applications with React and JavaScript, with a growing focus on full-stack development and AI-powered solutions. I enjoy understanding how businesses and startups work, identifying their challenges, and creating technology that makes their work simpler, faster, and more effective. I’m naturally curious, always learning, and constantly improving my skills.

        </p>
      </div>

      {/* Skills pulled up over the banner */}
      <div className="w-full px-4 sm:px-8 lg:px-16 -mt-12 z-10">
        <Skills />
      </div>

    </div>
  );
}

export default Intro;