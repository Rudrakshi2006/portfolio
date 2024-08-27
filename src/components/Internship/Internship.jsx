import React from "react";
import styles from "./Internship.module.css";
import { getImageUrl } from "../../utils";

const data = [
    {
        "title": "Internship",
        company: "Tata Consultancy",
        "imageSrc": "internship/tata.pdf",
        "description": "Gain practical work experience, developed industry-relevant skills through real time projects.",
        responsibility: 'Frontend Engineer',
        time: "Jun 24 - May 25",

    },
    {
        "title": "Summer Internship",
        company: "Google STEP",
        "description": "Learned technical skills, worked on software Engineering projects, and receive mentorship from Google engineers",
        responsibility: 'Intern',
        time: "May 24",
    },
]

export const Internship = () => {
    return (
        <section className={styles.container} id="internships" >
            <h2 className={styles.title}>Internships</h2>
            <div className={styles.internships}>
                {data.map((e, i) => (
                    <div key={i} className={styles.intrtnshipItem}>
                        <h3>{e.title}</h3>
                        <h5>{`${e.company} (${e.time})`}</h5>
                        <p>{e.description}</p>
                        <p>Responsibility: {e.responsibility}</p>
                      {e.imageSrc&&  <a href={getImageUrl(e.imageSrc)} className={styles.link} target="_blank">
                            View
                        </a>}


                    </div>
                ))}
            </div>
        </section>
    )
}