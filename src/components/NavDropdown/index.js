import styles from "./index.module.css"
import Link from "next/link"
import useVisible from "../../hooks/useVisible"

export default function NavDropdown(){

  const { ref, isVisible, setIsVisible } = useVisible(false);


  
    return <div onClick={e => setIsVisible(!isVisible)} className={`${styles.dropdownContainer}`}>
    <p>...</p>
    <div className={`${styles.dropdownMenu} ${isVisible && styles.show}`}  >
    <div className={styles.dropdownMenuLinks}  >
        <Link href="/home">
          <a className={styles.link}  ref={ref}>Home</a>
        </Link>
        <Link href="/shop">
          <a className={styles.link}  ref={ref}>Jelly Shop</a>
        </Link>
        <Link href="/leaderboard">
          <a className={styles.link}  ref={ref}>Leaderboard</a>
        </Link>
        <Link href={"/profile"}>
          <a className={styles.link}  ref={ref}>Profile</a>
        </Link>
      <Link href="/api/auth/logout">
        <a  ref={ref}>
          <button className={`${styles.btn} btn`}>Logout</button>
        </a>
      </Link>
      </div>
    </div>
  </div> 

}