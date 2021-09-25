import { useEffect, useState } from "react";
import Tag from "./Tag";
import GuessInput from "./GuessInput";

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
    <>
      <GuessInput />
      <ul className="grid gap-3 grid-cols-8 grid-flow-row-dense">
        {tags.map((tag, index) => {
          return <Tag tag={tag.tag} key={index} />;
        })}
      </ul>
    </>
  );
};

export default Quiz;
