import { call, delay, select, take } from "redux-saga/effects";
import connect from "../../../Services/socket/connect/Connect";
import createSocketChannel from "./CreateSocketChannel";
import updateTopics from "../UpdateTopics";

function* watchSocket() {
  const client = yield call(connect);
  yield call(console.log, "after connect");
  const token = yield select(state=>state.data.token);
  yield call(console.log, token);
  const socketChannel = yield call(createSocketChannel, client, token);

  yield delay(500);
  yield call(console.log, client);
  // yield fork(updateTopics, socket);
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
