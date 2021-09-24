import { resourceLimits } from "worker_threads";
import IGame from "../models/IGame";

const apiURL = process.env.REACT_APP_IP_BORAD_GAMES_API;
const clientId = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

class BoardGamesApi {
  async getMostLikesGames() {
    const response = await fetch(`${apiURL}search?client_id=${clientId}`);

    const result: { games: IGame[]; count: number } = await response.json();

    return result.games;
  }

  async getGamesByName(name: string) {
    const responce = await fetch(
      `${apiURL}search?client_id=${clientId}&limit=5&fuzzy_match=true&name=${name}`
    );

    const result: { games: IGame[]; count: number } = await responce.json();

    return result.games;
  }
}

export default BoardGamesApi;
