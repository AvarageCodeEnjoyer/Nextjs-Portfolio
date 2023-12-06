"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={`${styles.nav_items} ${styles.name_nav}`}>
        Niko Drossos
      </div>
      <div className={styles.space} />
      <div className={`${styles.nav_items} ${styles.sideNav}`}>
        <Link href="https://avaragecodeenjoyer.github.io/Real-portfolio-Website/AboutMe.html" className={styles.link}>
          About
        </Link>
      </div>
      <div className={`${styles.nav_items} ${styles.sideNav}`}>
        <Link href="https://avaragecodeenjoyer.github.io/Real-portfolio-Website/Portfolio.html" className={styles.link}>
          Portfolio
        </Link>
      </div>
      <div className={`${styles.nav_items} ${styles.sideNav}`}>
        <Link href="https://avaragecodeenjoyer.github.io/Real-portfolio-Website/index.html" className={styles.link}>
          Home
        </Link>
      </div>
    </nav>

  );
};

export default Navbar;
