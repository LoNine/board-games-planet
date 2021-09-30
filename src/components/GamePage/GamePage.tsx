import {useEffect, useState } from "react";
import { useParams } from "react-router";
import { FC } from "react-router/node_modules/@types/react";
import { getGameById } from "../../app/games";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

interface IGamePageParams {
  game: string;
}

interface IGameInfo {
  image: string;
  name: string;
  description: string;
}

const GamePage:FC = () => {
  const params: IGamePageParams = useParams();
  const [gameInfo, setGameInfo] = useState<IGameInfo | null>(null);

  const dispatch = useAppDispatch();
  const { byId: gameUnfiltered } = useAppSelector((state) => state.games);

  useEffect(() => {
    dispatch(getGameById(params.game));
  }, [params.game]);

  useEffect(() => {
    if (gameUnfiltered && gameUnfiltered.length === 1) {
      setGameInfo({
        image: gameUnfiltered[0].images.large,
        name: gameUnfiltered[0].name,
        description: gameUnfiltered[0].description,
      });
    }
  }, [gameUnfiltered]);
  return (
    <div>
      {gameInfo && (
        <div>
          <img src={gameInfo.image} alt={gameInfo.name} />
          <h2>{gameInfo.name}</h2>
          <div dangerouslySetInnerHTML={{ __html: gameInfo.description }} />
        </div>
      )}
    </div>
  );
};

export default GamePage;
