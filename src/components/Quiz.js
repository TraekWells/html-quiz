import { useEffect, useState } from "react";

const Quiz = () => {
  const [tags, updateTags] = useState([]);

  useEffect(() => {
    const getTags = async () => {
      await fetch("./data/tags.json")
        .then((response) => response.json())
        .then((data) => {
          updateTags(data);
        });
    };
    getTags();
  }, []);

  return (
    <ul>
      {tags.map((tag, index) => {
        return <li key={index}>{tag.description}</li>;
      })}
    </ul>
  );
};

export default Quiz;
