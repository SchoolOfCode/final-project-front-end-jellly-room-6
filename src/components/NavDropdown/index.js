import styles from "./index.module.css"
import Link from "next/link"
import useVisible from "../../hooks/useVisible"

export default function NavDropdown(){

  const { ref, isVisible, setIsVisible } = useVisible(false);
  
    return <div onClick={e => setIsVisible(!isVisible)} className={`${styles.dropdownContainer}`}>
    <p ref={ref}>...</p>
    <div className={`${styles.dropdownMenu} ${isVisible && styles.show}` }   >
    <div className={styles.dropdownMenuLinks}  >
        <Link href="/home">
          <a className={styles.link}  >Home</a>
        </Link>
        <Link href="/shop">
          <a className={styles.link}  >Jelly Shop</a>
        </Link>
        <Link href="/leaderboard">
          <a className={styles.link}  >Leaderboard</a>
        </Link>
        <Link href={"/profile"}>
          <a className={styles.link}  >Profile</a>
        </Link>
      <Link  href="/api/auth/logout">
        <a >
          <button className={`${styles.logoutBtn} btn`}>Logout</button>
        </a>
      </Link>
      </div>
    </div>
  </div> 

}