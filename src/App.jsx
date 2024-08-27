import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Internship } from "./components/Internship/Internship"
import { Research } from "./components/Research/Research"
import {Skills} from './components/Skills/Skills'

import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Experience />
      <Internship/>
      <Research/>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
