import Link from "next/link";
import styles from "../../../styles/index.module.css";

export default function NavBar() {
  return (
    <>
      <Link href="/home">
        <a className={styles.link}>Home</a>
      </Link>
      <Link href="/leaderboard">
        <a className={styles.link}>Leaderboard</a>
      </Link>
      <Link href="/shop">
        <a className={styles.link}>Shop</a>
      </Link>
      <Link href="/profile">
        <a className={styles.link}>Profile</a>
      </Link>
      <a href="/api/auth/logout"><button>Logout</button></a>
      
    </>
  );
}
