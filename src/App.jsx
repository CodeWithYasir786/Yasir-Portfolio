import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import HeroSection from "./components/HeroSection/HeroSection";
import Intro from "./components/Skills/Intro";
import WorkContainer from "./components/Projects/WorkContainer";
import FutureProjectsContainer from "./components/FutureProjects/FutureProjectsContainer";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import SayHello from "./components/Conversation/SayHello";
import StartupCon from "./components/Conversation/StartupCon";
import ContactPage from "./components/Conversation/Contact";

function App() {
  const [view, setView] = useState("main"); // "main" | "hello" | "startup" | "contact"

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
      <NavBar onSayHello={() => setView("hello")} />
      <HeroSection />
      <Intro />
      <WorkContainer />
      <FutureProjectsContainer onStartupCon={() => setView("startup")} />
      {/* <ContactUs onContact={() => setView("contact")} /> */}
      <Footer onContact={() => setView("contact")} />
    </>
  );
}

export default App;

