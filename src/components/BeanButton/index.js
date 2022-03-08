import React from "react";
import Image from "next/image";
import styles from "./BeanButton.module.css";

export default function BeanButton({ text, color, completed }) {
  const opacity = completed ? `0.5` : `1`;

  return (
    <div className={styles.container}>
      {completed && <div className={`${styles.completedMark} ${styles.animate}`}></div>}
      <button
        className={`${styles.beanButton} ${styles.animate}`}
        style={{ filter: `hue-rotate(${color}deg) opacity(${opacity})` }}
      >
        <p className={styles.category}>{text}</p>
        <Image
          className={styles.jellybean}
          src="/jellybean-button.svg"
          width={120}
          height={120}
          alt={`${text} Button`}
        />
      </button>
    </div>
  );
}
