import React from "react";
import Image from "next/image";
import styles from "./BeanButton.module.css";

export default function BeanButton({ text, color, completed }) {
  const grayscale = completed ? `0.9` : `0`;

  return (
    <div className={styles.container}>
    {completed && <div className={styles.completedMark}></div>}
      <button
        className={styles.beanButton}
        style={{ filter: `hue-rotate(${color}deg) grayscale(${grayscale})` }}
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
