import { useEffect, useState } from "react";
import getAuth0User from "../src/hooks/getAuth0User";
import useUserInfo from "../src/hooks/useUserInfo";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Results from "../src/components/Results";
import styles from "../styles/questions.module.css";

export default function Question({ questions, category, auth0User }) {

  const { user, error, isLoading } = useUser();
  const userInfo = useUserInfo(auth0User.username)

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

  function checkAnswer(e) {
    // Check if text inside clicked button is equal to correct answer
    if (e.target.textContent == currentQuestion.correct) setScore(score + 1);
    else console.log("incorrect");
    // Only increment question count if there is a question available to increment to
    if (questionCount < questions.length - 1) return setQuestionCount(questionCount + 1);
    calculateScore();
  }

  function calculateScore() {
    // More than 50% correct at end of quiz, setWin to true
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
            user={userInfo}
          />
        )}
      </div>
    )
  );
}

// Context gives us access to queries in the URL I.E. /questions?category=Addition
export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(ctx) {
  // Getting questions from our API by category passed in URL queries
  const res = await fetch(`https://jellly.herokuapp.com/questions/${ctx.query.category}`);
  const data = await res.json();
  // Storing questions

  
  const questionCount = 3;
  function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }
  const questions = shuffleArray(data.payload).slice(0, questionCount)

  //Set to max 3 questions for testing

  // Sending props into the question page component
  return {
    props: {
      auth0User: await getAuth0User(ctx),
      category: ctx.query.category,
      questions
    },
  };
}})