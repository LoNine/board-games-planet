import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import IGame from "../models/IGame";
import BoardGamesApi from "../services/BoardGamesApi";

interface IGamesInitialState {
  mostDiscussed: IGame[] | null;
  searchByName: IGame[] | null | undefined;
}

export const getMostLikesGames = createAsyncThunk(
  "games/getMostLikes",
  async () => {
    const api = new BoardGamesApi();

    const result = await api.getMostLikesGames();

    return result;
  }
);

export const getGamesByName = createAsyncThunk(
  "games/getByName",
  async (name: string) => {
    const api = new BoardGamesApi();

    const result = await api.getGamesByName(name);
    
    return result.length > 0 ? result : undefined;
  }
);

const initialState: IGamesInitialState = {
  mostDiscussed: null,
  searchByName: null,
};

const gamesReducer = createReducer(initialState, (builder) => {
  builder.addCase(getMostLikesGames.fulfilled, (state, action) => {
    state.mostDiscussed = action.payload;
  });

  builder.addCase(getGamesByName.pending, (state) => {
    state.searchByName = null;
  });

  builder.addCase(getGamesByName.fulfilled, (state, action) => {
    state.searchByName = action.payload;
  });

  builder.addCase(getGamesByName.rejected, (state) => {
    state.searchByName = undefined;
  });
});

export default gamesReducer;
