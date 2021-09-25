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
      <section className="bg-white m-8 p-8 rounded-lg shadow-md">
        <GuessInput />
      </section>
      <div className="container m-8 mx-auto">
        <p className="uppercase mb-2 leading-snug font-semibold text-indigo-600">
          Tags
        </p>
        <ul className="flex flex-wrap">
          {tags.map((tag, index) => {
            return <Tag link={tag.link} tag={tag.tag} key={index} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default Quiz;
