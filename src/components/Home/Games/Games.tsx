import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import { FC } from "react-router/node_modules/@types/react";
import { IGameHome } from "../Home";
import Game from "./Game";
import styles from "./Games.module.scss";

interface IGamesProps {
  games: IGameHome[];
  className: string;
}

const Games: FC<IGamesProps> = ({ games, className }) => {
  return (
    <div>
    <div className={clsx(styles.container, className)}>
      {games.map((game) => (
        <Game key={game.id} game={game} />
        ))}
    </div>
        <Link to='/games'>See All Games</Link>
      
    </div>
  );
};

export default Games;
