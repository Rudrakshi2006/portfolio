import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        Rudrakshi is a brilliant, ambitious person with an infectious love of technology. She is a first-year BTech student at the Symbiosis Institute of Technology, Nagpur. Her enthusiasm for exploring the areas of web development and programming never declines, and her proficiency in HTML/CSS, C, C++, and Python is truly exceptional. She is a pro at solving puzzles and is passionate about learning about all aspects of algorithms and data structures. Her passion for technology can be seen through her engagement with emerging technologies and trends.
        Beyond her professional ambitions, Rudrakshi has a diverse personality and loves music, TED Talks, and various other interests. She enjoys going to music events, watching inspirational pitches, and exploring new interests. Rudrakshi is ready to face the academic challenge and make a name for herself in the industry with her strong technical foundation and enthusiasm to learn.
        
        {/* <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul> */}
      </div>
    </section>
  );
};
