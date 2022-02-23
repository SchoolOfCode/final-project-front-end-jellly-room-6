import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Results from "../src/components/Results";
import styles from "../styles/questions.module.css";

export default function Question({ questions, category, userID }) {
  const { user, error, isLoading } = useUser();
  const [questionCount, setQuestionCount] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [score, setScore] = useState(0);
  const [win, setWin] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    setCurrentQuestion(questions[questionCount]);
  }, [questionCount, questions]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!user) {
    window.location.href = "/";
  }

  function checkAnswer(e) {
    if (e.target.textContent == currentQuestion.correct) setScore(score + 1);
    else console.log("incorrect");
    if (questionCount < questions.length - 1) return setQuestionCount(questionCount + 1);
    calculateScore();
  }

  function calculateScore() {
    if (score >= questions.length * 0.5) setWin(true);
    else setWin(false);
    setComplete(true);
  }

  return (
    user && (
      <div className={styles.container}>
        {!complete && (
          <div className={styles.questionContainer}>
            <h2 className={styles.questionText}>{currentQuestion.question}</h2>
            <div className={styles.answers}>
              <button className={styles.btn} onClick={checkAnswer}>
                {currentQuestion.answers[0]}
              </button>
              <button className={styles.btn} onClick={checkAnswer}>
                {currentQuestion.answers[1]}
              </button>
              <button className={styles.btn} onClick={checkAnswer}>
                {currentQuestion.answers[2]}
              </button>
              <button className={styles.btn} onClick={checkAnswer}>
                {currentQuestion.answers[3]}
              </button>
            </div>
            <h3>
              Question: {questionCount + 1}/{questions.length}
            </h3>
            <p>{currentQuestion.correct}</p>
          </div>
        )}
        {complete && (
          <Results
            numQuestions={questions.length}
            category={category}
            score={score}
            hasWon={win}
            user={userID}
          />
        )}
      </div>
    )
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://jellly.herokuapp.com/questions/${context.query.category}`);
  const data = await res.json();
  const questions = data.payload;

  return {
    props: {
      questions,
      userID: context.query.user,
      category: context.query.category,
    },
  };
}
