import Link from "next/link";
import Image from "next/image";
import styles from "../../../styles/index.module.css";

export default function NavBar() {
  return (
    <>
    
        <div className={styles.NavBar}>
          {" "}
          <Image alt="icon-jelly" src="/logoJelly.png" width={40} height={40} />
          <h2>Jelly</h2> 
        </div>
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
      <Link href="/api/auth/logout">
      <a><button>Logout</button></a>
      </Link>
      
    </>
  );
}
