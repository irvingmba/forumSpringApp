import { all, fork, take, takeEvery } from "redux-saga/effects";
import { signInAct, signInSaga } from "./SignIn";
import { signUpAct, signUpSaga } from "./SignUp";
import { socketSaga } from "./Socket";
import { ASYNC_SOCKET } from "./Socket/SocketAction";

const { SIGN_UP_ACT } = signUpAct;
const { SIGN_IN_ACT } = signInAct;

function* rootSaga() {
  yield takeEvery(SIGN_UP_ACT, signUpSaga);
  yield takeEvery(SIGN_IN_ACT, signInSaga);
  yield takeEvery(ASYNC_SOCKET, socketSaga);
}

export default rootSaga;
