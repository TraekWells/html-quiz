import React from "react";
import TagList from "../TagList/TagList";
const getData = fetch("./tags.json").then((response) => response.json());

const Quiz = () => {
  const [tags, setTags] = React.useState([]);

  React.useEffect(() => {
    getData.then((results) => {
      setTags(results);
    });
  }, []);
  return (
    <>
      <h1>Quiz</h1>
      <TagList tags={tags} />
    </>
  );
};

export default Quiz;
