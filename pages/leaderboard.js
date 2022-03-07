import { useUser } from "@auth0/nextjs-auth0";
import NavBar from "../src/components/NavBar";
import styles from "../styles/leaderboard.module.css";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Loading from "../src/components/Loading";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Leaderboard({ users }) {
  const { user, error, isLoading } = useUser();
  const [limit, setLimit] = useState(10);
  const [usersList, setUsersList] = useState([...users.slice(0, limit)]);

  if (isLoading) return <Loading />;
  if (error) return <div>{error.message}</div>;
  if (!user) {
    window.location.href = "/";
  }
  return (
    user && (
      <div>
        <NavBar />
        <motion.div className={styles.container} animate={{ opacity: [0, 1] }}>
          <h1 data-cy="leaderboard-title" className={styles.title}>
            Leaderboard
          </h1>
          <ol className={styles.leaderboard}>
            {usersList.map((user, index) => (
              <motion.li
                className={styles.user}
                key={user.username}
                animate={{ x: [-200, 0], opacity: [0, 1] }}
                transition={{ delay: 0.25 * index }}
              >
                <p className={styles.userPosition}>#{index + 1}</p>
                <p className={styles.username}>{user.username}</p>
                <p className={styles.userXP}>{user.xp} XP</p>
              </motion.li>
            ))}
          </ol>
          <motion.div
            className={styles.jellies}
            animate={{ scale: [0, 1], opacity: [0, 1] }}
          >
            <Image
              alt="icon-jelly"
              src="/threeJellies.png"
              width={300}
              height={300}
            />
          </motion.div>
        </motion.div>
      </div>
    )
  );
}

export async function getServerSideProps() {
  const response = await fetch(`${API_URL}/users`);
  const data = await response.json();

  const users = data.payload.sort((a, b) => (a.xp < b.xp ? 1 : -1));
  return {
    props: {
      users,
    },
  };
}
