import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <div className={styles.links}>
        <a href="mailto:rudrakshibhandekar@gmail.com" target="_blank" className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          
        </a>
        <a href="https://www.linkedin.com/in/rudrakshi-bhandekar-b9257731a/" target="_blank" className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          
        </a>
        <a  href="https://github.com/Rudrakshi2006/" target="_blank" className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
        
        </a>
      </div>
    </footer>
  );
};
