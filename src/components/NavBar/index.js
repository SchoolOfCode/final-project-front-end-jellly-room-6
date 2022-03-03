import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.css";
import { useState } from "react";
import NavDropdown from "../NavDropdown";

export default function NavBar() {

  const [showDropdown, setShowDropdown] = useState(false)

  function handleClick(){
    setShowDropdown(!showDropdown)
  }

  return (
    <div className={styles.container}>
    
      <div className={styles.branding}>
        <Image alt="icon-jelly" src="/logoJelly.png" width={70} height={10} />
        <h2 className={styles.title}>JELLLY</h2>
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

      <NavDropdown handleClick={handleClick} isDisplayed={showDropdown}/>


    </div>
  );
}
