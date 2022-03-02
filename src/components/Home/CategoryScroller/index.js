//next and previous button with functions handleclick
//in the home page
//selected category state

import React from 'react'
import styles from "./index.module.css"

export default function CategoryScroller({handlePreviousCategory, handleNextCategory, selectedCategory }) {
  return (
    <div className={styles.scroller}>
        <p onClick={handlePreviousCategory}>{"<"}</p>
        <h2>{selectedCategory}</h2>
        <p onClick={handleNextCategory}>{">"}</p>
    </div>
  )
}

