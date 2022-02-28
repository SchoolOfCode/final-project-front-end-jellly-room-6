
import styles from "./index.module.css"

export default function CategoryDropdown({handleSelect}){


    return <select className={styles.dropdown} defaultValue={"social"} onChange={handleSelect}>
    <option className={styles.option} value="financial">Financial</option>
    <option className={styles.option} value="social">Social</option>
    <option className={styles.option} value="home">Home</option>
    <option className={styles.option} value="wellbeing">Wellbeing</option>
    <option className={styles.option} value="general">General Maths</option>
  </select> 
}
