import { createAction } from "@reduxjs/toolkit";

const ASYNC_GET_POSTS = "ASYNC_GET_POSTS";

const getPostsAct = createAction(ASYNC_GET_POSTS);

export { ASYNC_GET_POSTS };
export default getPostsAct;
