import { useUser } from "@auth0/nextjs-auth0";
import NavBar from "../src/components/NavBar";
import Image from "next/image";
import styles from "../styles/leaderboard.module.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Leaderboard({ users }) {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!user) {
    window.location.href = "/";
  }
  return (
    user && (
      <div>
        <NavBar />
        <div className={styles.container}>
          <h1 className={styles.title}>Leaderboard</h1>
          <ol className={styles.leaderboard}>
            {users.map((user, index) => (
              <li className={styles.user} key={user}>
                <p className={styles.userPosition}>#{index + 1}</p>
                <p className={styles.username}>{user.username}</p>
                <p className={styles.userXP}>{user.xp}</p>
              </li>
            ))}
          </ol>
        </div>
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
