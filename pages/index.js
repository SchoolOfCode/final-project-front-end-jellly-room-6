import Button from "react-bootstrap/Button";
import Image from "next/image";
import styles from "../styles/index.module.css";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

export default function LandingPage() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    window.location.href = "/home";
  }

  return (
    <div className={styles.container}>
      <hr />
      <Link href="/api/auth/login">
        <a>
          <Button className="btn login">Login</Button>
        </a>
      </Link>

      <div className={styles.wording}>
        <h1 className={styles.title}>JELLLY</h1>
      </div>
      <Image src="/logoJelly.png" alt="me" width="64" height="64" />
      <h2 className={styles.text}>
        The fun, free way to learn maths and improve financial literacy
      </h2>
      <button className="btn large">Get Started</button>
      <Image src="/threeJellies.png" alt="me" width="64" height="64" />
    </div>
  );
}
