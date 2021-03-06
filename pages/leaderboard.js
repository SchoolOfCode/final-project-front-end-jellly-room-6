import { useUser } from "@auth0/nextjs-auth0";
import NavBar from "../src/components/NavBar";
import styles from "../styles/leaderboard.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Loading from "../src/components/Loading";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const usersToDisplay = 10;

export default function Leaderboard({ users }) {
  const { user, error, isLoading } = useUser();
  const usersList = [...users.slice(0, usersToDisplay)];

  if (isLoading) return <Loading redirect="/leaderboard" />;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        <NavBar />
        <motion.main className={styles.container} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
          <motion.div className={styles.jellies} animate={{ scale: [0, 1], opacity: [0, 1] }}>
            <Image alt="icon-jelly" src="/threeJellies.png" width={300} height={300} />
          </motion.div>
        </motion.main>
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
