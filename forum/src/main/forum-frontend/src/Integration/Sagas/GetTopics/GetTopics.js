import { call, put } from "redux-saga/effects";
import { sendGetTopics } from "../../../Services/api/Request";
import { dataActions } from "../../State/Reducers/data";

function* getTopics() {
  try {
    const response = yield call(sendGetTopics);
    const { data } = response || {};
    yield put(dataActions.setTopics(data));
  } catch (error) {
    console.error("Could not get the topics");
  }
}

export default getTopics;