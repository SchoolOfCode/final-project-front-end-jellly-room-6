import styles from "../../../../styles/home.module.css";
import CategoryButton from "../CategoryButton";

export default function CategoryContainer({ id, categories, userId, completedCategories }) {
  const buttonColors = categories.map(() => Math.floor(Math.random() * 720));

  return (
    <div className={`${styles.gridItem} ${styles.gridItemLevel}`}>
      <div className={styles.level}>
        <h2 className={styles.levelTitle}>Section {id}</h2>
        <div className={styles.levelContainer}>
          {categories.map((category, index) => {
            return (
              <CategoryButton
                color={buttonColors[index]}
                key={category}
                category={category}
                user={userId}
                isCompleted={completedCategories.includes(category) ? true : false}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
