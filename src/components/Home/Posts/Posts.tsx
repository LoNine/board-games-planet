import clsx from "clsx";
import React from "react";
import { FC } from "react-router/node_modules/@types/react";
import { IPostHome } from "../Home";
import Post from "./Post";
import styles from './Posts.module.scss';

interface IPostsProps {
  forumPosts: IPostHome[];
  className: string;
}

const Posts: FC<IPostsProps> = ({ forumPosts, className }) => {
  return (
    <div className={clsx(styles.container, className)}>
      {forumPosts.map((post) => (
        <Post forumPost={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
