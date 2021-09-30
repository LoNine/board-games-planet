import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { FC } from "react-router/node_modules/@types/react";
import { getFilteredGames } from "../../app/games";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import GamesList from "./GamesList";
import SearchInputs from "./SearchInputs";
import { IQueryObj } from "./SearchInputs/SearchInputs";

export interface IGamesFiltered {
  id: string;
  name: string;
  description: string;
  image: string;
  age: number;
  min_players: number;
  max_players: number;
  min_playtime: number;
  max_playtime: number;
}

const Games: FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const history = useHistory();
  const [gamesFiltered, setGamesFiltered] = useState<IGamesFiltered[]>([]);
  const [count, setCount] = useState(0);
  const { filtered } = useAppSelector((state) => state.games);

  const handleOnSearch = (query: IQueryObj[], skip:string) => {
    const queryString = query.reduce(
      (result, item, index) =>
        index === 0
          ? `${result}${item.key}=${item.value}`
          : `${result}&${item.key}=${item.value}`,
      "?"
    );
    history.push(location.pathname + queryString);
    dispatch(getFilteredGames({main: queryString, skip: skip}));
  };

  useEffect(() => {
    dispatch(getFilteredGames({main:location.search ? location.search : "?", skip:'0'}));
  }, []);

  useEffect(() => {
    if (filtered) {
      setGamesFiltered(
        filtered.games.map((game) => {
          return {
            name: game.name,
            id: game.id,
            description: game.description_preview,
            image: game.images.small,
            age: game.min_age,
            min_players: game.min_players,
            max_players: game.max_players,
            min_playtime: game.min_playtime,
            max_playtime: game.max_playtime,
          };
        })
      );

      setCount(filtered.count);
    }
  }, [filtered]);

  return (
    <div>
      <SearchInputs onSearch={handleOnSearch} count={count} />
      <GamesList games={gamesFiltered} />
    </div>
  );
};

export default Games;
