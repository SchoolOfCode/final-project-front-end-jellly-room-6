
import styles from "./index.module.css"

export default function CategoryDropdown({handleSelect}){


    return <select className={styles.dropdown} defaultValue={"social"} onChange={handleSelect}>
    <option value="financial">Financial</option>
    <option value="social">Social</option>
    <option value="home">Home</option>
    <option value="wellbeing">Wellbeing</option>
    <option value="general">General Maths</option>
  </select> 
}
