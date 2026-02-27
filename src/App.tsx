import { useEffect, useState, lazy, Suspense } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));

import { getInitialTheme, applyTheme } from "./utils/theme";
const SpaceBackground = lazy(() => import("./components/SpaceBackground/SpaceBackground"));

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
      {theme === "dark" && (
        <Suspense fallback={null}>
          <SpaceBackground key={theme} />
        </Suspense>
      )}
      {/* Content */}
      <div className="relative z-10 text-gray-800 dark:text-gray-100">
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <main>
          {/* Above the fold → load immediately */}
          <Hero />
          {/* Below the fold → lazy load */}
          <Suspense fallback={null}>
            <About />
            <Skills />
            <Projects />
            <Contact />
          </Suspense>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;