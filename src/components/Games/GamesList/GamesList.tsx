import React from 'react'
import { FC } from 'react-router/node_modules/@types/react'
import { IGamesFiltered } from '../Games'
import GameItem from './GameItem'
import styles from './GameList.module.scss';

interface IGameListProps {
  games: IGamesFiltered[]
}

const GamesList:FC<IGameListProps> = ({games}) => {
  return (
    <div className={styles.container}>
      {games.map((game) => <GameItem key={game.id} game={game} />)}
    </div>
  )
}

export default GamesList
