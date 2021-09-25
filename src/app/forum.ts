import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import IForumPost from "../models/IForumPost";
import BoardGamesApi from "../services/BoardGamesApi";

interface IForumInitialState {
  postsForHome: IForumPost[] | null | undefined;
}

export const getForumPostsForHome = createAsyncThunk(
  "forum/getPostsForHome",
  async () => {
    const api = new BoardGamesApi();

    const result = await api.getForumPostsForHome();

    return result;
  }
);

const initialState: IForumInitialState = {
  postsForHome: null,
};

const forumReducer = createReducer(initialState, (builder) => {
  builder.addCase(getForumPostsForHome.pending, (state) => {
    state.postsForHome = null;
  });

  builder.addCase(getForumPostsForHome.fulfilled, (state, action) => {
    state.postsForHome = action.payload;
  });

  builder.addCase(getForumPostsForHome.rejected, (state) => {
    state.postsForHome = undefined;
  });
});

export default forumReducer;
