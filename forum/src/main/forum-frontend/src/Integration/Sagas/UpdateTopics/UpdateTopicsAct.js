import { createAction } from "@reduxjs/toolkit";

const ASYNC_UPDATE_TOPICS = "ASYNC_UPDATE_TOPICS";

const updateTopicsAct = createAction(ASYNC_UPDATE_TOPICS);

export { ASYNC_UPDATE_TOPICS };
export default updateTopicsAct;
