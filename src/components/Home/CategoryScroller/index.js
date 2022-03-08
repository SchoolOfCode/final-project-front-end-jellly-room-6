//next and previous button with functions handleclick
//in the home page
//selected category state

import React from "react";
import styles from "./index.module.css";
import { motion } from "framer-motion";

export default function CategoryScroller({
  handlePreviousCategory,
  handleNextCategory,
  selectedCategory,
}) {
  return (
    <motion.div className={styles.scroller} animate={{ opacity: [0, 1] }}>
      <motion.p animate={{ opacity: [0, 1] }} onClick={handlePreviousCategory} className={styles.prevBtn}><span>&#10140;</span></motion.p>
      <motion.h2 animate={{ x: [-50, 0] }}>{selectedCategory}</motion.h2>
      <motion.p animate={{ opacity: [0, 1] }} onClick={handleNextCategory}><span>&#10140;</span></motion.p>
    </motion.div>
  );
}
