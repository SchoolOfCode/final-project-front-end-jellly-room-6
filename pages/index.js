import Button from "react-bootstrap/Button";
import Image from "next/image";
import styles from "../styles/index.module.css";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import Loading from "../src/components/Loading";

export default function LandingPage() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <Loading />;
  if (error) return <div>{error.message}</div>;

  if (user) {
    window.location.href = "/home";
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/api/auth/login">
          <a>
            <Button className="btn login">Login</Button>
          </a>
        </Link>
      </header>

      <main className={styles.main}>
        <div className={styles.titleContainer}>
          <div className={styles.titleLogo}>
            <Image
              className={styles.jellyBean}
              src="/logoJelly.png"
              alt="me"
              width="130"
              height="100"
            />
            <h1 className={styles.title}>JELLLY</h1>
          </div>
          <h2 className={styles.text}>
            The fun, free way to learn maths and improve financial literacy.
          </h2>
        </div>

        <Link href="/api/auth/login">
          <a>
            <button className="btn large" id={styles.getStarted}>
              Get Started
            </button>
          </a>
        </Link>

        <div className={styles.jellies}>
          <Image src="/threeJellies.png" alt="me" width="200" height="200" />
        </div>
      </main>
      <div className={styles.lineContainer}>
        <hr className={styles.line} />
      </div>
    </div>
  );
}
