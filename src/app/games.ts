import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import IGame from "../models/IGame";
import BoardGamesApi from "../services/BoardGamesApi";

interface IGamesInitialState {
  mostDiscussed: IGame[] | null;
  filtered: { games: IGame[]; count: number } | null;
  searchByName: IGame[] | null | undefined;
  byId: IGame[] | null | undefined;
}

interface IQuery {
  main: string;
  skip: string;
}

export const getMostLikesGames = createAsyncThunk(
  "games/getMostLikes",
  async () => {
    const api = new BoardGamesApi();

    const result = await api.getMostLikesGames();

    return result;
  }
);

export const getFilteredGames = createAsyncThunk(
  "games/getFiltered",
  async (query: IQuery) => {
    const api = new BoardGamesApi();

    const result = await api.getFilteredGames(query.main, query.skip);

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

export const getGameById = createAsyncThunk(
  "games/getById",
  async (id: string) => {
    const api = new BoardGamesApi();

    const result = await api.getGameById(id);

    return result.length > 0 ? result : undefined;
  }
);

const initialState: IGamesInitialState = {
  mostDiscussed: null,
  searchByName: null,
  filtered: null,
  byId: null,
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

  builder.addCase(getFilteredGames.pending, (state) => {
    state.filtered = null;
  });

  builder.addCase(getFilteredGames.fulfilled, (state, action) => {
    state.filtered = action.payload;
  });

  builder.addCase(getGameById.pending, (state) => {
    state.byId = null;
  });

  builder.addCase(getGameById.fulfilled, (state, action) => {
    state.byId = action.payload;
  });

  builder.addCase(getGameById.rejected, (state) => {
    state.byId = undefined;
  });
});

export default gamesReducer;
