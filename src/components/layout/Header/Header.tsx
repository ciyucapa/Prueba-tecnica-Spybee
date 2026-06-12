"use client";

import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Spybee
      </div>

      <h2>Proyecto Onboarding</h2>

      <div className={styles.user}>
        Julian
      </div>
    </header>
  );
}