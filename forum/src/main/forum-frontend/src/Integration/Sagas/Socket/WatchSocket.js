import { call, delay, fork, select, take } from "redux-saga/effects";
import connect from "../../../Services/socket/connect/Connect";
import updateTopics from "../UpdateTopics";
import createSocketChannel from "./CreateSocketChannel";
import socketEmit from "./SocketEmit";

function* watchSocket() {
  const client = yield call(connect);
  const token = yield select(state=>state.data.token);
  const socketChannel = yield call(createSocketChannel, client, token);

  yield delay(500);
  // yield fork(socketEmit, client);
  while (true) {
    try {
      yield call(console.log, "within watch socket");
      const payload = yield take(socketChannel);
      yield call(console.log, payload);
    } catch (error) {
      console.error(error);
    }
  }
}

export default watchSocket;
