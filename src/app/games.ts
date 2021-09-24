import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import IGame from "../models/IGame";
import BoardGamesApi from "../services/BoardGamesApi";

interface IGamesInitialState {
  mostDiscussed: null | IGame[];
}

export const getMostLikesGames = createAsyncThunk(
  "games/getMostLikes",
  async () => {
    const api = new BoardGamesApi();

    const result = await api.getMostLikesGames();

    return result;
  }
);

const initialState: IGamesInitialState = {
  mostDiscussed: null,
};

const gamesReducer = createReducer(initialState, (builder) => {
  builder.addCase(getMostLikesGames.fulfilled, (state, action) => {
    state.mostDiscussed = action.payload;
  });
});

export default gamesReducer;
