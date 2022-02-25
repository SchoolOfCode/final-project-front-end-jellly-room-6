import React from "react";
import styles from "./BeanButton.module.css";

export default function BeanButton({ text, color, disabled }) {
  return (
    <button
      disabled={disabled}
      className={`${styles.beanButton} ${disabled && styles.disabled}`}
      style={{ filter: `hue-rotate(${color}deg)` }}
    >
      <p className={styles.category}>{text}</p>
      <img className={styles.jellybean} src="jellybean-button.svg" width={120} />
    </button>
  );
}
