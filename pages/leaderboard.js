import { useUser } from "@auth0/nextjs-auth0";
import { useState } from "react";
import NavBar from "../src/components/NavBar";
import styles from "../styles/leaderboard.module.css"

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Leaderboard({ users }) {
  const { user, error, isLoading } = useUser();
  const [usersList, setUsersList] = useState(users);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!user) {
    window.location.href = "/";
  }
  return (
    user && (
      <div className={styles.container}>
        <NavBar />
        <h1>Leaderboard</h1>
        <ol>
          {users.map((user, index) => (
            <li className={styles.user} key={user}>
              <h2>{index +1}</h2>
              <h2>{user.username}</h2>
              <h3>{user.xp}</h3>
            </li>
          ))}
        </ol>
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
