import Link from "next/link";
import Router from "next/router";
import React, { useEffect } from "react";
import Image from "next/image";
import style from "../../../styles/result.module.css";

export default function Results({ numQuestions, user, score, hasWon }) {
  useEffect(() => {
    async function rewardUser(XP, beans) {
      await fetch(`http://localhost:3001/users/${user}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ XP, beans }),
      });
    }
    hasWon && rewardUser(score * 10, 20);
  }, []);

  return (
    <div>
      {hasWon && (
        <div className={style.frame}>
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
      )}
      {!hasWon && (
        <div className={style.frame}>
          <Image src="/threeJellies.png" width={40} height={40} alt="Jellies" />
          <h1>Results</h1>
          <h2>Correct answers: {score}</h2>
          <h2>Incorrect answers: {numQuestions - score}</h2>
          <h1>Oh no you did not pass! Please try again</h1>
          <button onClick={() => Router.reload(window.location.pathname)}>Retry?</button>
          <Link href="/home">
            <a>
              <button>Home</button>
            </a>
          </Link>
        </div>
      )}
    </div>
  );
}
