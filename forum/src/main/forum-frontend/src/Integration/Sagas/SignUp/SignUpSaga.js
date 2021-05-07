import { call, put } from "redux-saga/effects";
import sendSignUp from "../../../Services/api/Request/SendSignUp";
import extractValues from "../../../Utils/Formatters/ExtractValues";
import { operationsActions } from "../../State/Reducers/operations";
import {
  OP_FAILED,
  OP_OK,
  OP_PROCESSING,
} from "../../State/Reducers/operations/OperationStates";

function* signUpSaga(action) {
  yield put(operationsActions.signUpOp(OP_PROCESSING));
  const { payload } = action;
  const formatted = yield call(extractValues, payload);
  const response = yield call(sendSignUp, formatted);
  if (response && "errors" in response) {
    yield put(operationsActions.signUpOp(OP_FAILED));
    return;
  }
  yield put(operationsActions.signUpOp(OP_OK));
}

export default signUpSaga;
