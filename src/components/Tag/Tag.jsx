import React from "react";
import styles from "./Tag.module.scss";

const Tag = ({ tag, correctGuesses }) => {
  const isCorrect = correctGuesses.includes(tag);
  return (
    <div className={`${styles.tag} ${isCorrect ? styles["is-correct"] : ""}`}>
      {tag}
    </div>
  );
};

export default Tag;
