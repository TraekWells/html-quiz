import React from "react";
import TagList from "../TagList";
import Guess from "../Guess";
const getData = fetch("./tags.json").then((response) => response.json());

const Quiz = () => {
  const [tags, setTags] = React.useState([]);
  const [correctGuesses, setCorrectGuesses] = React.useState([]);

  React.useEffect(() => {
    getData.then((results) => {
      setTags(results);
    });
  }, []);

  const handleGuess = (guess) => {
    const isCorrectGuess = tags.some((tag) => tag === guess);
    if (isCorrectGuess) {
      const nextGuesses = [...correctGuesses, guess];
      setCorrectGuesses(nextGuesses);
    } else {
      return;
    }
  };
  return (
    <>
      <h1>Quiz</h1>
      <Guess handleGuess={handleGuess} />
      <p>You have {tags.length} tags remaining.</p>
      <TagList tags={tags} />
    </>
  );
};

export default Quiz;
