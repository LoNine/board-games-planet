import IGame from "../models/IGame";

const apiURL = process.env.REACT_APP_IP_BORAD_GAMES_API;
const clientId = process.env.REACT_APP_CLIENT_ID;
const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

class BoardGamesApi {
  async getMostLikesGames() {
    const response = await fetch(
      `${apiURL}search?client_id=${clientId}`
    );

    const result: {games:IGame[], count:number} = await response.json();

    return result.games;
  }
}

export default BoardGamesApi;
