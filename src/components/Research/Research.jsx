import React from "react";
import styles from "./Research.module.css";
import researches from "../../data/research.json";


export const Research = () => {
    return (
        <section className={styles.container} id="researchPapers" >
        <h2 className={styles.title}>Research Papers</h2>
        <div className={styles.researches}>
            {researches.map((e, i) => (
                <div key={i} className={styles.researchItem}>
                    <h3>{e.title}</h3>
                   <a href={e.link} className={styles.link} target="_blank" >View</a>


                </div>
            ))}
        </div>
    </section>
    )
}