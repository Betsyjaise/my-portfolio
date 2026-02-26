import { useEffect, useState } from "react";
import "./App.css";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import { getInitialTheme, applyTheme } from "./utils/theme";
import SpaceBackground from "./components/SpaceBackground/SpaceBackground";

function App() {
  // theme state
  const [theme, setTheme] = useState<"light" | "dark">(() => getInitialTheme());

  // apply theme to html
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // toggle function
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      {/* Dark background base layer */}
      <div className="fixed inset-0 bg-gray-100 dark:bg-gray-900 transition-colors duration-300 z-0" />

      {/* Stars */}
      {theme === "dark" && <SpaceBackground key={theme} />}

      {/* Content */}
      <div className="relative z-10 text-gray-800 dark:text-gray-100">
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;