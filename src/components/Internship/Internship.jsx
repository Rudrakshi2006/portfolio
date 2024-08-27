import React from "react";
import styles from "./Internship.module.css";
import { getImageUrl } from "../../utils";

const data = [
    {
        "title": "Internship A",
        company: "Tata Consultancy",
        "imageSrc": "projects/project.png",
        "description": "This is a project made to learn the latest languages by building an app.",
        responsibility: 'responsibility',
        time: "Jun 24 - May 25",

    },
    {
        "title": "Internship A",
        company: "Company A",
        "imageSrc": "projects/project.png",
        "description": "This is a project made to learn the latest languages by building an app.",
        responsibility: 'responsibility',
        time: "time",
    },
    {
        "title": "Internship A",
        company: "Company A",
        "imageSrc": "projects/project.png",
        "description": "This is a project made to learn the latest languages by building an app.",
        responsibility: 'responsibility',
        time: "time",
    }
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
                        <a href={getImageUrl(e.imageSrc)} className={styles.link} target="_blank">
                            View
                        </a>


                    </div>
                ))}
            </div>
        </section>
    )
}