import { useState } from "react";
import logo from "./logonY.png";

function NavBar({ onSayHello }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-30">
          {/* Logo */}
          <a href="" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-20 h-20 rounded-xl flex items-center justify-center">
              <img
                src={logo}
                alt="Logo image"
                className="object-contain transition-transform duration-300 hover:scale-130"
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden sm:flex items-center gap-6">
            <span className="text-[#364168] hover:text-purple-400 cursor-pointer font-semibold text-base tracking-tightS sm:block hidden">
              My Projects
            </span>
            <button
              onClick={onSayHello}
              className="px-5 py-2 rounded-3xl border-2 font-semibold border-[#6e07f3] text-[#6e07f3] bg-white text-[1.1rem] cursor-pointer transition-all duration-300 ease-in-out hover:text-white hover:bg-[#6e07f3]"
            >
              Say Hello
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="sm:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-purple-700 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-purple-700 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-purple-700 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-40 py-4" : "max-h-0"}`}
      >
        <div className="flex flex-col items-center gap-4 px-4 pb-2">
          <span className="text-purple-700 cursor-pointer font-bold text-base">
            My Projects
          </span>
          <button
            onClick={onSayHello}
            className="px-5 py-2.5 rounded-3xl border-2 border-[#6e07f3] text-[#6e07f3] bg-white text-[1.1rem] cursor-pointer transition-all duration-300 ease-in-out hover:text-white hover:bg-[#6e07f3]"
          >
            Say Hello
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;