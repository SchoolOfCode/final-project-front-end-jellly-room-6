import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";

export default function NavBar() {
  return (
    <div className={styles.container}>
        <div className={styles.branding}>
          <Image alt="icon-jelly" src="/logoJelly.png" width={70} height={10} />
          <h2 className={styles.title}>JELLY</h2> 
        </div>
        <div className={styles.navLinks}>
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
        </div>
      <Link href="/api/auth/logout">
      <a><button className="btn">Logout</button></a>
      </Link>
    </div>
  );
}
