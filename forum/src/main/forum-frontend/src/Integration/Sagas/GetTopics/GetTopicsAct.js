import { createAction } from "@reduxjs/toolkit";

const ASYNC_GET_TOPICS = "ASYNC_GET_TOPICS";

const getTopicsAct = createAction(ASYNC_GET_TOPICS);

export { ASYNC_GET_TOPICS };
export default getTopicsAct;