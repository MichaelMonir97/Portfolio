import "./App.css";
import Navbar from "./components/NavBar";
import Intro from "./components/Intro";
import Services from "./components/Service";
import Experince from "./components/Experince";
import Work from "./components/Work";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { createContext, useContext, useEffect, useState } from "react";

export const currentMode = createContext();

function App() {
  const [mode, setMode] = useState(false);
  function updateState() {
    setMode(!mode);
  }

  useEffect(() => {
    mode
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [mode]);
  return (
    <currentMode.Provider value={[mode, updateState]}>
      <div className="App">
        <Navbar />
        <Intro />
        <Services />
        <Experince />
        <Work />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </currentMode.Provider>
  );
}

export default App;
