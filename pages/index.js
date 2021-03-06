import Button from "react-bootstrap/Button";
import Image from "next/image";
import styles from "../styles/index.module.css";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import Loading from "../src/components/Loading";
import { motion } from "framer-motion";

export default function LandingPage() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <Loading />;
  if (error) return <div>{error.message}</div>;

  if (user) {
    window.location.href = "/home";
  }

  return (
    <motion.div animate={{ opacity: [0, 1] }}>
      <motion.header
        className={styles.header}
        animate={{ opacity: [0, 1] }}
        transition={{ delay: 2, duration: 2 }}
      >
        <Link href="/api/auth/login">
          <a>
            <Button data-cy="login" className="btn login">
              Login
            </Button>
          </a>
        </Link>
      </motion.header>

      <main className={styles.container}>
        <motion.div className={styles.titleContainer} animate={{ opacity: [0, 1] }}>
          <motion.div className={styles.titleLogo} animate={{ y: [-50, 0], opacity: [0, 1] }}>
            <Image
              className={styles.jellyBean}
              src="/logoJelly.png"
              alt="jellly-logo"
              width="130"
              height="100"
            />
            <h1 className={styles.title}>JELLLY</h1>
          </motion.div>
          <motion.h2
            className={styles.text}
            animate={{ x: [-50, 0], opacity: [0, 1] }}
            transition={{ delay: 0.5 }}
          >
            The Jellly app is a fun, free way to learn basic maths and improve financial literacy.
            Why not improve your numeracy with just a few minutes of daily practice? Earn points
            while you learn and use your rewards in our super fun shop!
          </motion.h2>
        </motion.div>

        <Link href="/api/auth/login">
          <motion.a animate={{ opacity: [0, 1] }} transition={{ duration: 2, delay: 1 }}>
            <button data-cy="get-started" className="btn large" id={styles.getStarted}>
              Get Started
            </button>
          </motion.a>
        </Link>

        <motion.div
          className={styles.jellies}
          animate={{ scale: [0, 1] }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Image src="/threeJellies.png" alt="me" width="200" height="200" />
        </motion.div>
      </main>
      <div className={styles.lineContainer}>
        <hr className={styles.line} />
      </div>
    </motion.div>
  );
}
