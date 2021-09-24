import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import gamesReducer from "./games";

export const store = configureStore({
  reducer: {
    games: gamesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
