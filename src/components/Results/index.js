import Link from "next/link";
import Router from "next/router";
import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./index.module.css";
import { motion } from "framer-motion";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Results({ numQuestions, user, score, category, hasWon }) {
  console.log(user);
  function hasCompletedCategory(categoryToCheck) {
    return user.categories.includes(categoryToCheck);
  }

  useEffect(() => {
    async function rewardUser(XP, beans) {
      await fetch(`${API_URL}/users/${user.user_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ XP, beans }),
      });

      await fetch(`${API_URL}/categories/${user.user_id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ category }),
      });
    }
    if (!hasWon || hasCompletedCategory(category)) return;
    rewardUser(score * 10, 20);
  }, [hasWon, score, user]);

  return (
    <div className={styles.frame}>
      {hasWon && (
        <motion.div animate={{ x: [-5000, 0] }}>
          <div classsName={styles.content}>
            <Image src="/threeJellies.png" width={40} height={40} alt="Jellies" />
            <h1>Results</h1>
            <h2>Correct answers: {score}</h2>
            <h2>Incorrect answers: {numQuestions - score}</h2>
            <h2>XP earned: {score * 10}</h2>
            <h2>Beans collected: 20</h2>
            <h1>You bean it!</h1>
            <Link href="/home">
              <a>
                <button>Continue</button>
              </a>
            </Link>
          </div>
        </motion.div>
      )}
      {!hasWon && (
        <motion.div animate={{ x: [-5000, 0] }}>
          <div className={styles.content}>
            <Image src="/threeJellies.png" width={40} height={40} alt="Jellies" />
            <h1>Results</h1>
            <h2>Correct answers: {score}</h2>
            <h2>Incorrect answers: {numQuestions - score}</h2>
            <h1>Oh no you did not pass! Please try again</h1>
            <button onClick={() => Router.reload(window.location.pathname)}>Retry?</button>
            <Link href="/home">
              <a>
                <button className={styles.smallbutton}>Home</button>
              </a>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}
