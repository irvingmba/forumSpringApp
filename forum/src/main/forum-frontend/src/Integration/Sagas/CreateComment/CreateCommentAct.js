import { createAction } from "@reduxjs/toolkit";

const ASYNC_CREATE_COMMENT = "ASYNC_CREATE_COMMENT";

const createCommentAct = createAction(ASYNC_CREATE_COMMENT);

export default createCommentAct;
export {ASYNC_CREATE_COMMENT};