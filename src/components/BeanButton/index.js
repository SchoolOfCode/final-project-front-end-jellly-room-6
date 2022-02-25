import React from "react";
import Image from "next/image";
import styles from "./BeanButton.module.css";

export default function BeanButton({ text, color, completed, xPos }) {

  const opacity = completed ? `1` : `0.5`

  return (
    <button className={styles.beanButton} style={{ filter: `hue-rotate(${color}deg)`,transform:`translateX(${xPos}%)`, opacity: opacity}}>
      <p className={styles.category}>{text}</p>
      <Image
        className={styles.jellybean}
        src="/jellybean-button.svg"
        width={120}
        height={120}
        alt={`${text} Button`}
      />
    </button>
  );
}
