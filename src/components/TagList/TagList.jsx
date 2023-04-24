import React from "react";
import Tag from "../Tag/Tag";
import styles from "./TagList.module.scss";

const TagList = ({ tags }) => {
  return (
    <div className={styles["tag-list"]}>
      {tags.map((tag) => {
        return (
          <Tag
            key={tag.tag}
            tag={tag.tag}
            link={tag.link}
            description={tag.description}
          />
        );
      })}
    </div>
  );
};

export default TagList;
