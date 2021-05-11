import { createAction } from "@reduxjs/toolkit";

const ASYNC_CREATE_POST = "ASYNC_CREATE_POST";

const createPostAct = createAction(ASYNC_CREATE_POST);

export default createPostAct;
export { ASYNC_CREATE_POST };
