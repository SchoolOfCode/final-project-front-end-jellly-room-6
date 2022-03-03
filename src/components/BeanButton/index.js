import React from "react";
import Image from "next/image";
import styles from "./BeanButton.module.css";
import {motion} from 'framer-motion'


export default function BeanButton({ text, color, completed, xPos }) {

  const grayscale = completed ? `1` : `0`

  return (<motion.div animate={{x: xPos, opacity: 1}} transition={{ease: "easeOut", duration: 1}}   whileHover={{scale: 1.05, transition: { duration:0.2 },
  }} whileTap={{ scale: 0.9 }}>
    <button className={styles.beanButton} style={{ filter: `hue-rotate(${color}deg) grayscale(${grayscale})`}}>
      <p className={styles.category}>{text}</p>
      <Image
        className={styles.jellybean}
        src="/jellybean-button.svg"
        width={120}
        height={120}
        alt={`${text} Button`}
      />
    </button>

    </motion.div>

  );
}
