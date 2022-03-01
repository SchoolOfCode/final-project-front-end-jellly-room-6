import Link from "next/link";
import Router from "next/router";
import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./index.module.css";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Results({
  numQuestions,
  user,
  score,
  category,
  hasWon,
}) {
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
          <div className={styles.image}>
            <Image
              src="/threeJellies.png"
              width={300}
              height={300}
              alt="Jellies"
              layout="responsive"
            />
          </div>
          <div className={styles.content}>
            <h2>Results</h2>
            <h3 className={styles.resultsText}>Correct answers: {score}</h3>
            <h3 className={styles.resultsText}>Incorrect answers: {numQuestions - score}</h3>
            <h3 className={styles.resultsText}>XP earned: {score * 10}</h3>
            <h3 className={styles.resultsText}>Beans collected: 20</h3>
            <h2>You passed it!</h2>
            <Link href="/home">
              <a>
                <Button>Continue</Button>
              </a>
            </Link>
          </div>
        </motion.div>
      )}
      {!hasWon && (
        <motion.div animate={{ x: [-5000, 0] }}>
          <div className={styles.image}>
            <Image
              src="/threeJellies.png"
              width={300}
              height={300}
              alt="Jellies"
              layout="responsive"
            />
          </div>
            <div className={styles.content}>
            <h2>Results</h2>
            <h3 className={styles.resultsText}>Correct answers: {score}</h3>
            <h3 className={styles.resultsText}>Incorrect answers: {numQuestions - score}</h3>
            <h2>Oh no you did not pass! Please try again</h2>
            <div className={styles.buttons}>
             <a><Button onClick={() => Router.reload(window.location.pathname)}>
                Retry?
              </Button></a> 
              <Link href="/home">
                <a>
                  <Button>Home</Button>
                </a>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
