import { useEffect, useState } from "react";
import Tag from "./Tag";
import GuessInput from "./GuessInput";

const Quiz = () => {
  const [tags, setTags] = useState([]);
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [guess, setGuess] = useState("");

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
      if (guess === tag.tag) {
        setCorrectGuesses([...correctGuesses, { tag: guess }]);
      }
    });
  }, [guess]);

  return (
    <>
      <section className="bg-white m-8 p-8 rounded-lg shadow-md max-w-md mx-auto">
        <GuessInput setGuess={setGuess} guess={guess} />
      </section>
      <div className="container m-8 mx-auto max-w-4xl">
        <p className="uppercase mb-2 leading-snug font-semibold text-indigo-600">
          Tags
        </p>
        <p>There are {tags.length - correctGuesses.length} tags remaining.</p>
        <ul className="flex flex-wrap">
          {tags.map((tag, index) => {
            return (
              <Tag
                link={tag.link}
                tag={tag.tag}
                key={index}
                isCorrect={correctGuesses.some(
                  (guesses) => guesses.tag === tag.tag
                )}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Quiz;
