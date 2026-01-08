import { useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import "../styles.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Creator from "./Creator";
import LatestProjects from "./LatestProjects";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Skills from "./Skills";
import Footer from "./Footer";
import Switch from "react-switch";
import AbstractStroke from "./AbstractStroke";
export default function App() {
  const isBrowserDefaultDark = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkMode, setDarkMode] = useState(isBrowserDefaultDark());

  const handleChange = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    darkMode
      ? document.documentElement.setAttribute("data-theme", "dark")
      : document.documentElement.setAttribute("data-theme", "light");
  }, [darkMode]);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.06,
      wheelMultiplier: 0.8,
      gestureOrientation: "vertical",
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
      <main id="home">
          <Navbar />
      
      <label className="darkmode-switch">
        <p>Dark Mode</p>
        <Switch
          onChange={handleChange}
          checked={darkMode}
          handleDiameter={40}
          offColor="#9292A0"
          onColor="#5C5C66"
          offHandleColor="#fff"
          onHandleColor="#090909"
          height={48}
          width={100}
          borderRadius={40}
          activeBoxShadow="0px 0px 0px 0px #fffc35"
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                color: "red",
              }}
            >
              <img src="/svg/moon-icon.svg" alt="" height="60%" />
            </div>
          }
          checkedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img src="/svg/sun-icon.svg" alt="" height="60%" />
            </div>
          }
          uncheckedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img src="/svg/sun-icon.svg" alt="" />
            </div>
          }
          checkedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                color: "red",
              }}
            >
              <img src="/svg/moon-icon.svg" alt="" />
            </div>
          }
          className="react-switch"
          id="small-radius-switch"
        />
      </label>
      <div className="App">
        <Hero />
              <div id="about"><AboutMe /></div>              
              <div id="projects"><LatestProjects /></div>
              <div id="experience"><WorkExperience /></div>
              <Creator />
              <div id="education"><Education /></div>
              <div id="skills"><Skills /></div>
      </div>
      <Footer />
    </main>
  );
}
