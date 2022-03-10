import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";
import NavDropdown from "../NavDropdown";

export default function NavBar() {
  return (
    <div className={styles.container}>
    
    
        <div className={styles.brandingWithLinks}>

        <div className={styles.branding}>
          <div className={styles.logo}>
            <Link href="/home">
              <a style={{ margin: 0 }}>
                <Image
                  alt="icon-jelly"
                  src="/logoJelly.png"
                  width={70}
                  height={70}
                  layout="fixed"
                />
              </a>
            </Link>
          </div>
          <h2 className={styles.title}>JELLLY</h2>
        </div>


        <div className={styles.navLinks}>
        <Link href="/home">
          <a className={styles.link}>Home</a>
        </Link>
        <Link href="/shop">
          <a data-cy="nav-item" className={styles.link}>
            Jellly Shop
          </a>
        </Link>
        <Link href="/leaderboard">
          <a className={styles.link}>Leaderboard</a>
        </Link>
        <Link href={"/profile"}>
          <a className={styles.link}>Profile</a>
        </Link>
        </div>

        </div>



      <Link href="/api/auth/logout">
        <a className={styles.logoutAnchor}>
          <button className={`${styles.logoutBtn} btn`}>Logout</button>
        </a>
      </Link>

      <div className={styles.dropdownDisplay}>
        <NavDropdown />
      </div>
    </div>
  );
}
