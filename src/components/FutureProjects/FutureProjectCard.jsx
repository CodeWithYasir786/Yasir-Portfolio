import { useState } from "react";

function FutureProjectCard({ img, para, name, tag, accentColor }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`
        relative flex flex-col items-center justify-center gap-4  p-10 sm:p-12 rounded-2xl border overflow-hidden 
        bg-white cursor-pointer
        transition-all duration-300 ease-out
        ${hovered
          ? "border-violet-500 -translate-y-2 shadow-2xl shadow-violet-200"
          : "border-gray-100 translate-y-0 shadow-md shadow-gray-100"
        }
      `}
    >
      {/* Background accent blob */}
      <div
        className={`
          absolute -top-8 -right-8 w-28 h-28 rounded-full
          bg-violet-400 transition-opacity duration-300
          ${hovered ? "opacity-10" : "opacity-5"}
        `}
      />

      {/* Image / Icon area */}
      
        {img
          ? <img  alt={name} src={img} className="w-[80%] object-contain" />
          : <span className="text-xl sm:text-2xl text-violet-500 font-black">✦</span>
        }
    

      {/* Tag pill */}
      {/* {tag && (
        <span className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase text-violet-600 bg-violet-50 border border-violet-100 px-3 py-1 rounded-full w-fit">
          {tag}
        </span>
      )} */}

      {/* Title */}
      

      {/* Description */}
      <p className="text-sm text-[#141c3a] leading-relaxed flex-grow m-0">
        {para}
      </p>

      {/* CTA Button */}
      <div className="">
      <button className="bg-[#feecf0] rounded-xl text-[#d50f35] px-10 py-1  ">
        <i class="fa-solid fa-play"></i> On Hold
      </button></div>
      
    </div>
  );
}

export default FutureProjectCard;