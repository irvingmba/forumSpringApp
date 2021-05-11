import { call, put } from "redux-saga/effects";
import sendGetComments from "../../../Services/api/Request/SendGetComments";
import { dataActions } from "../../State/Reducers/data";

function* getComments(action) {
  try {
    const { payload } = action;
    const response = yield call(sendGetComments, {
      type: "getComments",
      msg: payload.post_id,
    });
    yield put(dataActions.selectPost(payload));
    yield put(dataActions.setComments(response.data));
  } catch (error) {
    console.error(error);
  }
}

export default getComments;
