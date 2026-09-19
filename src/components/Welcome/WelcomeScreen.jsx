import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAME = "Welcome To Yasir Mustafa Portfolio";
const QUOTE = "Build to Inspire";
const TYPE_SPEED = 70; // ms per letter
const HOLD_MS = 4300; // time the progress bar takes to fill

function WelcomeScreen({ onFinish }) {
  const [typed, setTyped] = useState("");
  const [showQuote, setShowQuote] = useState(false);

  // Type out the name
  useEffect(() => {
    if (typed.length < NAME.length) {
      const t = setTimeout(() => setTyped(NAME.slice(0, typed.length + 1)), TYPE_SPEED);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setShowQuote(true), 300);
      return () => clearTimeout(t);
    }
  }, [typed]);

  // Tell parent to unmount us after the hold, which triggers the exit animation
  useEffect(() => {
    const t = setTimeout(() => onFinish?.(), HOLD_MS + 200);
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#6e07f3]"
      exit={{ clipPath: "inset(0 0 100% 0)" }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
          {typed}
          <motion.span
            className="ml-1 inline-block h-[0.9em] w-[3px] bg-white align-[-0.1em]"
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
          />
        </h1>
        <motion.p
          className="mt-4 text-sm md:text-lg text-white/75"
          initial={{ opacity: 0, y: 6 }}
          animate={showQuote ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {QUOTE}
        </motion.p>
      </div>

      <div className="absolute bottom-10 left-1/2 h-[2px] w-40 -translate-x-1/2 overflow-hidden bg-white/25">
        <motion.div
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: HOLD_MS / 1000, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}

export default WelcomeScreen;