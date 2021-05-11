import { createSlice } from "@reduxjs/toolkit";
import { dataState } from "../../InitialState";
import setToken from "./SetToken";
import setTopics from "./SetTopics";
import setPosts from "./SetPosts";
import selectPost from "./SelectPost";
import setComments from "./SetComments";
import setProfile from "./SetProfile";
import insertPost from "./InsertPost";
import insertComment from "./InsertComment";

const dataSlice = createSlice({
  name: "data",
  initialState: dataState,
  reducers: {
    setToken,
    setTopics,
    setPosts,
    selectPost,
    setComments,
    setProfile,
    insertPost,
    insertComment,
  },
});

export default dataSlice;
