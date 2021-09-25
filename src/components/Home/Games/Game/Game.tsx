import React from "react";
import { useHistory } from "react-router";
import { FC } from "react-router/node_modules/@types/react";
import { IGameHome } from "../../Home";
import styles from "./Game.module.scss";

interface IGameProps {
  game: IGameHome;
}

const Game: FC<IGameProps> = ({ game }) => {
  const history = useHistory()
  const handleOnClick = () => {
    history.push(`/games/${game.id}`);
  }
  

  return (
    <div className={styles.container} onClick={handleOnClick}>
      <img src={game.img_url} alt={`${game.name}`} className={styles.image} />
      <h3 className={styles.title}>{game.name}</h3>
      <p className={styles.price}>{game.price}</p>
    </div>
  );
};

export default Game;
