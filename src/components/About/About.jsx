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
      </div>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"20px"}}>

      <video width='640' height='360' controls >
        <source src={getImageUrl('video.mp4')} type='video/mp4'/>
      </video>
      </div>
    </section>
  );
};
