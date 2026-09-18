import { useState } from "react";

function WorkCard({ image, text }) {
    const [hover, setHover] = useState(false);

    return (
        <div
    className="relative overflow-hidden rounded-xl cursor-pointer shadow-lg transition-shadow duration-500 hover:shadow-2xl h-64"
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
>
    {/* Image */}
    <img
        src={image}
        alt="Image"
        className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
            hover ? "scale-110" : "scale-100"
        }`}
    />

    {/* Overlay */}
    <div
        className={`absolute top-0 left-0 w-full h-full bg-[#172c4f]/95 flex justify-center items-center transition-all duration-500 ease-out ${
            hover ? "opacity-100" : "opacity-0"
        }`}
    >
        {/* Inner Content */}
        <div
            className={`w-[60%] flex flex-col justify-center items-center gap-4 transition-all duration-500 ease-out ${
                hover ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
        >
            <p className="text-white text-2xl text-center line-clamp-2">{text}</p>
            <button className="mt-4 px-4 py-2 border border-[#6e07f3] rounded-md bg-[#172c4f] text-white hover:bg-[#6e07f3] transition-colors duration-300">
                Visit Website {">"}
            </button>
        </div>
    </div>
</div>
    );
}

export default WorkCard;