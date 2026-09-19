import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import WelcomeScreen from "./components/Welcome/WelcomeScreen";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import Intro from "./components/Skills/Intro";
import WorkContainer from "./components/Projects/WorkContainer";
import FutureProjectsContainer from "./components/FutureProjects/FutureProjectsContainer";

import Footer from "./components/Footer/Footer";
import SayHello from "./components/Conversation/SayHello";
import StartupCon from "./components/Conversation/StartupCon";
import ContactPage from "./components/Conversation/Contact";

function App() {
  const [view, setView] = useState("main"); // "main" | "hello" | "startup" | "contact"
  const [showWelcome, setShowWelcome] = useState(() => {
    try {
      return !sessionStorage.getItem("welcomeShown");
    } catch {
      return true; // storage blocked (e.g. private mode) — fall back to always showing
    }
  });

  const dismissWelcome = () => {
    try {
      sessionStorage.setItem("welcomeShown", "true");
    } catch {
      // ignore — worst case it shows again next reload
    }
    setShowWelcome(false);
  };

  if (view === "hello") {
    return <SayHello onClose={() => setView("main")} />;
  }

  if (view === "startup") {
    return <StartupCon onClose={() => setView("main")} />;
  }

  if (view === "contact") {
    return <ContactPage onClose={() => setView("main")} />;
  }

  return (
    <>
      <AnimatePresence>
        {showWelcome && <WelcomeScreen onFinish={dismissWelcome} />}
      </AnimatePresence>
     <NavBar
       onSayHello={() => setView("hello")}
       onMyProjects={() =>
         document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
       }
    />
      <HeroSection />
      <Intro />
     <div id="projects">
       <WorkContainer />     </div>
      <FutureProjectsContainer onStartupCon={() => setView("startup")} />
      {/* <ContactUs onContact={() => setView("contact")} /> */}
      <Footer onContact={() => setView("contact")} />
    </>
  );
}

export default App;