import { createAction } from "@reduxjs/toolkit";

const ASYNC_GET_COMMENTS = "ASYNC_GET_COMMENTS";

const getCommentsAct = createAction(ASYNC_GET_COMMENTS);

export default getCommentsAct;
export { ASYNC_GET_COMMENTS };
