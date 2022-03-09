import Link from "next/link";
import Router from "next/router";
import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./index.module.css";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const rewardXpAmountPerQuestion = 20;
const rewardBeanAmount = 5;

export default function Results({ numQuestions, user, score, category, hasWon }) {

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
    rewardUser(score * rewardXpAmountPerQuestion, rewardBeanAmount);
  }, [hasWon, score, user, category]);

  return (
    <div className={styles.frame}>
      {hasWon && (
        <motion.div animate={{ opacity: [0, 1] }}>
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
            <h2 className={styles.title}>Results</h2>
            <div className={styles.stats}>
              <div>
                <p>Correct</p>
                <h3 className={styles.correct}>{score}</h3>
              </div>

              <div>
                <p>Incorrect</p>
                <h3 className={styles.incorrect}>{numQuestions - score}</h3>
              </div>

              <div>
                <p>XP earned</p>
                {hasCompletedCategory(category) ? (
                  <h3>0</h3>
                ) : (
                  <h3>{score * rewardXpAmountPerQuestion}</h3>
                )}
              </div>
              <div>
                <p>Beans collected</p>
                {hasCompletedCategory(category) ? <h3>0</h3> : <h3>{rewardBeanAmount}</h3>}
              </div>
            </div>
            <div className={styles.circle}>
              <CircularProgressbar
                styles={{ borderRadius: "5rem" }}
                value={(score * 100) / numQuestions}
                text={`${(score * 100) / numQuestions}%`}
              />
            </div>
            <h3>You smashed it!</h3>
            <Link href="/home">
              <a className="btn">
                <Button>Continue</Button>
              </a>
            </Link>
          </div>
        </motion.div>
      )}
      {!hasWon && (
        <motion.div animate={{ opacity: [0, 1] }}>
          <div className={styles.loseImage}>
            <Image
              src="/redJelly_sad.png"
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
            <div className={styles.circle}>
              <CircularProgressbar
                styles={{ borderRadius: "5rem" }}
                value={(score * 100) / numQuestions}
                text={`${Math.floor((score * 100) / numQuestions)}%`}
              />
            </div>
            <h3>{"Oh no you didn't pass! Please try again."}</h3>
            <div className={styles.buttons}>
              <a>
                <Button
                  className={styles.retry}
                  onClick={() => Router.reload(window.location.pathname)}
                >
                  Retry?
                </Button>
              </a>
              <Link href="/home">
                <a>
                  <Button className={styles.home}>Home</Button>
                </a>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
