import React from "react";
import { useHistory } from "react-router";
import { FC } from "react-router/node_modules/@types/react";
import { IPostHome } from "../../Home";
import styles from "./Post.module.scss";

interface IPostProps {
  forumPost: IPostHome;
}

const Post: FC<IPostProps> = ({ forumPost }) => {
  const history = useHistory();
  const date = new Date(forumPost.created_at);

  const handleOnClick = () => {
    history.push(`/forum/${forumPost.id}`);
  };

  return (
    <div className={styles.container} onClick={handleOnClick}>
      <div className={styles.head}>
        <h3 className={styles.title}>{forumPost.title}</h3>
      </div>
      <div>
        <p className={styles.description}>{forumPost.description}</p>
        <div>
          <p>{`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`}</p>
          <p>{forumPost.created_at_ago}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
