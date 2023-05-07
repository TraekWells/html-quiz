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
    const isCorrectGuess = tags.some((tag) => tag.tag === guess);
    if (isCorrectGuess) {
      const nextGuesses = [...correctGuesses, guess];
      setCorrectGuesses(nextGuesses);
      console.log(correctGuesses);
    } else {
      return;
    }
  };

  return (
    <>
      <h1>Quiz</h1>
      <Guess handleGuess={handleGuess} />
      <p>You have {tags.length - correctGuesses.length} tags remaining.</p>
      <p>Give up?</p>
      <button>Reveal answers</button>
      <TagList tags={tags} correctGuesses={correctGuesses} />
    </>
  );
};

export default Quiz;
