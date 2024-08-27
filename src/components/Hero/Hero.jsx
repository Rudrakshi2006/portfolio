import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rudrakshi Bhandekar</h1>
        <p className={styles.description}>
          I'm a major CSE Student
        </p>
        <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", alignItems:"center", justifyContent:"center", gap:"20px"}}>

        <a href="mailto:rudrakshibhandekar@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href={getImageUrl('resume.pdf')} className={styles.contactBtn} target="_blank">
          Resume
        </a>
        </div>
      </div>
      <img
        src={getImageUrl("my.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
