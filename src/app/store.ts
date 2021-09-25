import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import forumReducer from "./forum";
import gamesReducer from "./games";

export const store = configureStore({
  reducer: {
    games: gamesReducer,
    forum: forumReducer,
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
