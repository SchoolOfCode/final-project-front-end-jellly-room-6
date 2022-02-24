import { useUser } from "@auth0/nextjs-auth0";
import NavBar from "../src/components/NavBar";
import styles from "../styles/leaderboard.module.css";
import Image from "next/image";
import { useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Leaderboard({ users }) {
  const { user, error, isLoading } = useUser();
  const [limit, setLimit] = useState(10);
  const [usersList, setUsersList] = useState([...users.slice(0, limit)]);

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
            {usersList.map((user, index) => (
              <li className={styles.user} key={user.username}>
                <p className={styles.userPosition}>#{index + 1}</p>
                <p className={styles.username}>{user.username}</p>
                <p className={styles.userXP}>{user.xp}</p>
              </li>
            ))}
          </ol>
          <button className="btn load-more" onClick={() => setLimit(limit + 5)}>
            Load More
          </button>
          <div className={styles.jellies}>
            <Image alt="icon-jelly" src="/threeJellies.png" width={300} height={300} />
          </div>
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
