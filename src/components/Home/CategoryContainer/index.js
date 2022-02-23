import styles from '../../../../styles/home.module.css'
import CategoryButton from '../CategoryButton'

export default function CategoryContainer({id, categories, userId, completedCategories}){

    return  <div className={`${styles.gridItem} ${styles.gridItemLevel}`}>

    <div className={styles.level}>
    <h2 className={styles.levelTitle}>Section {id}</h2>
        <div className={styles.levelContainer}>

        {categories.map((category)=>{
          return <CategoryButton key={category} category={category} user={userId} isCompleted={completedCategories.includes(category)? true : false}/>
        })}

        </div>
    </div>

  </div>
}