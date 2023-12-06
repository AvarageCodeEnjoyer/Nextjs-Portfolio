import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
import MyPhoto from '../../public/me.jpg'

const About = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <div className={styles.text_background}>
            <h2>My name is Niko Drossos</h2>
            <p>
              I am A coding student from Goodyear Arizona who has an interest in
              programing and anything electronic
            </p>
          </div>
          <div>
            <Image src={MyPhoto} alt="My Photo"  className={styles.picture} />
          </div>
        </div>
        <div className={styles.container2}>
          <div className={styles.inner_container}>
            <h2>programing Languages</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li />
            </ul>
          </div>
          <div className={styles.inner_container}>
            <h2>Some of my hobbies</h2>
            <ul>
              <li>Programing</li>
              <li>Chess</li>
              <li>Balisong Fliping</li>
              <li>Working Out</li>
              <li>Bike RclassNameing</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.inner_container}>
          <h2>Background</h2>
          <div>
            I have been homeschooled since 2nd grade.
            <br />
            <br />
            My knowledge consists of my parents, KhanAcademy and Google.
            <br />
            <br />
            As a child I was allowed to research whatever I found interesting, this
            led me to having a little bit of knowledge in a broad range of topics.
          </div>
        </div>
      </div>
    </>

  );
};

export default About;
