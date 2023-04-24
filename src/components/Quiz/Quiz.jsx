import React from "react";
import TagList from "../TagList/TagList";
const getData = fetch("./tags.json").then((response) => response.json());

const Quiz = () => {
  const [tags, setTags] = React.useState([]);
  const [guess, setGuess] = React.useState("");

  React.useEffect(() => {
    getData.then((results) => {
      setTags(results);
    });
  }, []);
  return (
    <>
      <h1>Quiz</h1>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <p>You have {tags.length} tags remaining.</p>
      <button>Guess</button>
      <TagList tags={tags} />
    </>
  );
};

export default Quiz;
