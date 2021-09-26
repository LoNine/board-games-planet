import React from "react";
import { FC } from "react-router/node_modules/@types/react";
import { IGamesFiltered } from "../../Games";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupIcon from "@mui/icons-material/Group";
import styles from "./GameItem.module.scss";

interface IGameItemProps {
  game: IGamesFiltered;
}

const GameItem: FC<IGameItemProps> = ({ game }) => {
  return (
    <div className={styles.container}>
      <img src={game.image} alt={game.name} className={styles.image} />
      <div className={styles.textsContainder}>
      <h4 className={styles.title}>{game.name}</h4>
      <p className={styles.text}>{game.description}</p>
      </div>
      <div>
      <div className={styles.timeContainer}>
        <AccessTimeIcon />
        <div className={styles.time}>
          {`${game.min_playtime}-${game.max_playtime}`}
        </div>
      </div>
      <div className={styles.playersContainer}>
        <GroupIcon />
        <div className={styles.players}>
        {`${game.min_players}-${game.max_players}`}
        </div>
      </div>
      </div>
    </div>
  );
};

export default GameItem;
