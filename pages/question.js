import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import NavBar from "../src/components/NavBar";
import Results from "../src/components/Results";

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
      <div>
        <NavBar />
        {!complete && (
          <div>
            <h2>{currentQuestion.question}</h2>
            <button onClick={checkAnswer}>{currentQuestion.answers[0]}</button>
            <button onClick={checkAnswer}>{currentQuestion.answers[1]}</button>
            <button onClick={checkAnswer}>{currentQuestion.answers[2]}</button>
            <button onClick={checkAnswer}>{currentQuestion.answers[3]}</button>
          </div>
        )}
        {complete && <Results category={category} score={score} hasWon={win} user={userID} />}
      </div>
    )
  );
}

export async function getServerSideProps(context) {
  const questions = [
    {
      category: "Addition",
      question:
        "Ariel was playing basketball. 1 of her shots went in the hoop. 2 of her shots did not go in the hoop. How many shots were there in total?",
      answers: [3, 2, 5, 6],
      correct: 3,
    },
    {
      category: "Addition",
      question:
        "Adrianna has 10 pieces of gum to share with her friends. There wasn't enough gum for all her friends, so she went to the store to get 3 more pieces of gum. How many pieces of gum does Adrianna have now?",
      answers: [10, 7, 15, 13],
      correct: 13,
    },
    {
      category: "Addition",
      question:
        "Ariel was playing basketball. 1 of her shots went in the hoop. 2 of her shots did not go in the hoop. How many shots were there in total?",
      answers: [3, 2, 5, 6],
      correct: 3,
    },
    {
      category: "Addition",
      question:
        "Adrianna has 10 pieces of gum to share with her friends. There wasn't enough gum for all her friends, so she went to the store to get 3 more pieces of gum. How many pieces of gum does Adrianna have now?",
      answers: [10, 7, 15, 13],
      correct: 13,
    },
  ];

  return {
    props: {
      questions,
      userID: context.query.user,
      category: context.query.category,
    },
  };
}
