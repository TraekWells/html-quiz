import { useEffect, useState } from "react";
import Tag from "./Tag";

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
        return <Tag tag={tag.tag} key={index} />;
      })}
    </ul>
  );
};

export default Quiz;
