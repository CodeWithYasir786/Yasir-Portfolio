import coding from "./coding.svg";
import design from "./design.svg"


function HeroSection() {
  return (
    <div className="Hero-section flex flex-col justify-evenly  items-center min-h-screen gap-10 px-4 sm:px-8 text-center">
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-20 text-[
rgb(20, 28, 58)] font-extrabold leading-tight">
       React Developer,Software Engineer & Future Full-Stack Dev
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-gray-500  leading-relaxed">
        {/* I design and code beautifully simple things, and I love what I do. */}
        I enjoy solving real-world business problems and turning ideas into practical software solutions.
      </p>

      <img src={coding} className="w-[50%] sm:w-[30%] md:w-[25%] max-w-xs" alt="coding" />
      
      <img src={design} className="w-[90%] sm:w-[75%] md:w-[80%] max-w-4xl" alt="Design" />

    </div>
  );
}


export default HeroSection;