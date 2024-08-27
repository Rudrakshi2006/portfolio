import React from "react";

import styles from "./Experience.module.css";


const educationDetails = [
  { level: 'Bachelor of Technology in Computer Science', institution: "Symbiosis Institute of Technology, Nagpur", year: '2024 -2028',  },
  { level: 'Maharashtra State Board of Higher Secondary Education', institution: 'Dr. Bower Apostolic Jr. College, Nagpur', year: 'May 2024', percentage:"90.80%" },
  { level: 'Maharashtra State Board of Secondary Education', institution: 'New Apostolic English High School, Nagpur', year: 'May 2022', percentage:"95.60%" }
];

export const Experience = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      {/* <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div> */}
       <div className={styles.timelineContainer}>
          {educationDetails.map((item, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineContent}>
                <p>{item.year}</p>
                <h2>{item.institution}</h2>
                <p>{item.level}</p>
               {item?.percentage && <p>{item.percentage}</p>}
              </div>
              {index < educationDetails.length - 1 && <div className={styles.timelineLine} />}
            </div>
          ))}
        </div>
    </section>
  );
};
