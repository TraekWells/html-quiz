import { useEffect, useState } from "react";
import Tag from "./Tag";
import GuessInput from "./GuessInput";

const Quiz = () => {
  const [tags, setTags] = useState([]);
  const [guess, setGuess] = useState("");
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [revealAnswers, setRevealAnswers] = useState(false);

  const showAllTags = () => {
    setRevealAnswers(true);
  };

  useEffect(() => {
    const getTags = async () => {
      await fetch("./data/tags.json")
        .then((response) => response.json())
        .then((data) => {
          setTags(data);
        });
    };
    getTags();
  }, []);

  useEffect(() => {
    tags.forEach((tag) => {
      if (guess === tag) {
        setCorrectGuesses([...correctGuesses, { tag: guess }]);
      }
    });
  }, [guess]);

  return (
    <>
      <section className="bg-white m-6 p-8 rounded-lg shadow-md max-w-md mx-auto">
        <GuessInput setGuess={setGuess} guess={guess} />
      </section>
      <p className="text-center">
        Can't think of anymore?
        <button className="bg-indigo-600 mx-auto mt-3" onClick={showAllTags}>
          Reveal all tags
        </button>
      </p>
      <div className="container m-8 mx-auto max-w-5xl">
        <p className="uppercase mb-2 leading-snug font-semibold text-indigo-600">
          Tags
        </p>
        <p>There are {tags.length - correctGuesses.length} tags remaining.</p>
        <ul className="flex flex-wrap justify-items-center">
          {tags.map((tag, index) => {
            return (
              <Tag
                tag={tag}
                key={index}
                isCorrect={correctGuesses.some(
                  (guesses) => guesses.tag === tag
                )}
                revealAnswers={revealAnswers}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Quiz;
