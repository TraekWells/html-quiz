import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const handleStartQuiz = () => {
    navigate("/quiz");
  };

  return (
    <>
      <h1>Welcome</h1>
      <p>Click the button below to start the quiz.</p>
      <button onClick={handleStartQuiz}>Start Quiz</button>
    </>
  );
};

export default Welcome;
