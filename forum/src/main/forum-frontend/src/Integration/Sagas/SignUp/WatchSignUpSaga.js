import { call, put, takeEvery } from "redux-saga/effects";
import sendSignUp from "../../../Services/api/Request/SendSignUp";
import extractValues from "../../../Utils/Formatters/ExtractValues";
import goSignIn from "../../Router/Redirect/GoSignIn";
import { SIGN_UP_ACT } from "./signUpAct";

function* watchSignUpSaga() {
  yield takeEvery(SIGN_UP_ACT, signUpSaga);
}

function* signUpSaga(action) {
  // yield put()
  const { payload } = action;
  const formatted = yield call(extractValues,payload);
  const response = yield call(sendSignUp, formatted);
  if("error" in response) return;
  yield call(goSignIn);
}

export default watchSignUpSaga;
