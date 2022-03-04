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
      <p onClick={handlePreviousCategory}>{"<"}</p>
      <motion.h2 animate={{ x: [-50, 0] }}>{selectedCategory}</motion.h2>
      <p onClick={handleNextCategory}>{">"}</p>
    </motion.div>
  );
}
