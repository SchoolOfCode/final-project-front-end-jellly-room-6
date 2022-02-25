import styles from "../../../../styles/home.module.css";
import CategoryButton from "../CategoryButton";
import CategoryDropdown from "../CategoryDropdown";

export default function CategoryContainer({ handleSelect, categories, userId, completedCategories }) {
  const buttonColors = categories.map(() => Math.floor(Math.random() * 720));
  function getRandomXPos(){
    // Return number between -150 and 150
    const minXPos = -100;
    const maxXPos = 100;
    return Math.random() * (maxXPos - minXPos) + minXPos;
  }

  return (
    <div className={`${styles.gridItem} ${styles.gridItemLevel}`}>
      <div className={styles.level}>

        <CategoryDropdown handleSelect={handleSelect}/>

        <div className={styles.levelContainer}>
          {categories.map((category, index) => {
            return (
              <CategoryButton
                color={buttonColors[index] }
                xPos={getRandomXPos()}
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
