import React from "react";

import styles from "./Essay.module.css";
import { getImageUrl } from "../../utils";

export const Essay = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Reflective Essay</h2>
      <br/>
      <div className={styles.content}>
        <img
          src={getImageUrl("my2.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <div>
        <p>
          Rudrakshi Bhandekar, a talented student at Symbiosis Institute of Technology, Nagpur, is self-assured for success in Computer Science and Engineering. With a robust skill set encompassing programming languages like Python, C, C++, Java, and JavaScript, as well as web development tools like HTML and CSS, she has established a solid foundation for her future endeavors.
        </p>
        <br/>
        <p>
          Her recent three-month internship at TCS has further honed her technical skills and provided valuable insight into industry expectations. Rudrakshi has developed the ability to apply theoretical concepts to real-world problems, a highly valued asset by her prospective employer.
        </p>
        <br/>
        <p>
          With her diverse skill set and practical experience, Rudrakshi is well-equipped to tackle complex projects, adapt to emerging technologies, and make significant contributions to the technical field. Her internship has also prepared her for the demands of a professional environment, enabling her to navigate the workforce with confidence and poise. With this strong foundation and determination, Rudrakshi is destined for success and a bright future in tech.
        </p>
        </div>
      </div>
    </section>
  );
};
