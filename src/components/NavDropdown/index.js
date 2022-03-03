import styles from "./index.module.css"
import Link from "next/link"

export default function NavDropdown({handleClick, isDisplayed}){
    



    return <div onClick={handleClick} className={`${styles.dropdownContainer}`}>
    <p>...</p>
    <div className={`${styles.dropdownMenu} ${isDisplayed && styles.show}`}>
    <div className={styles.dropdownMenuLinks}>
        <Link href="/home">
          <a className={styles.link}>Home</a>
        </Link>
        <Link href="/shop">
          <a className={styles.link}>Jelly Shop</a>
        </Link>
        <Link href="/leaderboard">
          <a className={styles.link}>Leaderboard</a>
        </Link>
        <Link href={"/profile"}>
          <a className={styles.link}>Profile</a>
        </Link>
      <Link href="/api/auth/logout">
        <a>
          <button className={`${styles.btn} btn`}>Logout</button>
        </a>
      </Link>
      </div>
    </div>
  </div> 

}