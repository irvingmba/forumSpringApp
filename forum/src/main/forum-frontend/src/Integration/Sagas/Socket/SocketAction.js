const { createAction } = require("@reduxjs/toolkit");

const ASYNC_SOCKET = "ASYNC_SOCKET";

const socketAct = createAction(ASYNC_SOCKET);

export { ASYNC_SOCKET };
export default socketAct;
