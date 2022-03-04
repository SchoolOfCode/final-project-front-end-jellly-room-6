import styles from "../../../../styles/home.module.css";
import CategoryButton from "../CategoryButton";
import { motion } from "framer-motion";

export default function CategoryContainer({ categories, userId, completedCategories }) {
  const buttonColors = categories.map(() => Math.floor(Math.random() * 720));
  function getRandomXPos() {
    // Return number between -150 and 150
    const minXPos = -100;
    const maxXPos = 100;
    return Math.random() * (maxXPos - minXPos) + minXPos;
  }

  return (
    <motion.div className={styles.level} animate={{ y: [100, 0], opacity: [0, 1] }}>
      <div className={styles.levelContainer}>
        {categories.map((category, index) => {
          return (
            <CategoryButton
              index={index}
              color={buttonColors[index]}
              xPos={getRandomXPos()}
              key={category}
              category={category}
              user={userId}
              isCompleted={completedCategories.includes(category) ? true : false}
            />
          );
        })}
      </div>
    </motion.div>
  );
}
