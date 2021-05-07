import { call, delay, put } from "redux-saga/effects";
import { sendSignIn } from "../../../Services/api/Request";
import extractValues from "../../../Utils/Formatters/ExtractValues";
import { dataActions } from "../../State/Reducers/data";
import { operationsActions } from "../../State/Reducers/operations";
import {
  OP_FAILED,
  OP_OK,
  OP_PROCESSING,
} from "../../State/Reducers/operations/OperationStates";
import { socketAct } from "../Socket";
import { updateTopicsAction } from "../UpdateTopics";

function* signInSaga(action) {
  yield put(operationsActions.signInOp(OP_PROCESSING));
  const { payload } = action;
  const formatted = yield call(extractValues, payload);
  const response = yield call(sendSignIn, formatted);
  if (response && "errors" in response) {
    yield put(operationsActions.signInOp(OP_FAILED));
    return;
  }
  yield put(operationsActions.signInOp(OP_OK));
  const { token } = response && "data" in response ? response["data"] : null;
  yield put(dataActions.setToken(token));
  yield put(socketAct());
  yield delay(500);
  yield put(updateTopicsAction());
}

export default signInSaga;
