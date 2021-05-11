import { call, take } from "redux-saga/effects";
import { ASYNC_SOCKET } from "./SocketAction";

function* socketEmit(socket) {
  try {
    while (true) {
      yield take(ASYNC_SOCKET);
      yield call(console.log, socket);
    }
  } catch (error) {
      console.error(error);
  }
}

export default socketEmit;
