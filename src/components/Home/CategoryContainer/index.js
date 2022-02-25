import styles from "../../../../styles/home.module.css";
import CategoryButton from "../CategoryButton";
import CategoryDropdown from "../CategoryDropdown";

export default function CategoryContainer({ id, categories, userId, completedCategories, handleSelect }) {
  return (
    <div className={`${styles.gridItem} ${styles.gridItemLevel}`}>
      <div className={styles.level}>

        <CategoryDropdown handleSelect={handleSelect}/>

        <div className={styles.levelContainer}>
          {categories.map(category => {
            return (
              <CategoryButton
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
