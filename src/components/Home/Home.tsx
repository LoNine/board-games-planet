import React, { useEffect, useState } from "react";
import { batch } from "react-redux";
import { getForumPostsForHome } from "../../app/forum";
import { getMostLikesGames } from "../../app/games";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Games from "./Games";
import Posts from "./Posts";
import styles from './Home.module.scss';

export interface IGameHome {
  name: string;
  img_url: string;
  price: string;
  id: string;
}

export interface IPostHome {
  title: string;
  id: string;
  description: string;
  created_at: Date;
  created_at_ago: string;
  image: string;
  num_comments: number;
  num_likes: number;
  updated: string;
}

const Home = () => {
  const { mostDiscussed } = useAppSelector((state) => state.games);
  const { postsForHome } = useAppSelector((state) => state.forum);
  const [gamesHome, setGamesHome] = useState<IGameHome[] | null>(null);
  const [postsHome, setPostsHome] = useState<IPostHome[] | null>(null);

  const dispatch = useAppDispatch();
  const loadData = async () => {
    batch(() => {
      dispatch(getMostLikesGames());
      dispatch(getForumPostsForHome());
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (mostDiscussed) {
      setGamesHome(
        mostDiscussed.map((game) => {
          return {
            name: game.name,
            img_url: game.image_url,
            price: game.price,
            id: game.id,
          };
        })
      );
    }
  }, [mostDiscussed]);

  useEffect(() => {
    if (postsForHome) {
      setPostsHome(
        postsForHome.map((post) => {
          return {
            title: post.title,
            created_at: post.created_at,
            created_at_ago: post.created_at_ago,
            description: post.description_preview,
            id: post.id,
            image: post.image_url,
            num_comments: post.num_comments,
            num_likes: post.num_likes,
            updated: post.updated_at_ago,
          };
        })
      );
    }
  }, [postsForHome]);

  return (
    <div className={styles.container}>
      <div>{gamesHome && <Games className={styles.games} games={gamesHome} />}</div>
      <div>{postsHome && <Posts className={styles.posts} forumPosts={postsHome} />}</div>
    </div>
  );
};

export default Home;
