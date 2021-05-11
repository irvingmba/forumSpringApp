import { call, put, select } from "redux-saga/effects";
import extractValues from "../../../Utils/Formatters/ExtractValues";
import { dataActions } from "../../State/Reducers/data";

function* createPost(action) {
  try {
    const { payload } = action;
    const formatted = yield call(extractValues, payload);
    const profile = yield select((state) => state.data.profile);
    const post = {...formatted, author: profile.username, post_id: 100, p_date: new Date().toString()}
    yield put(
      dataActions.insertPost(post)
    );
  } catch (error) {
    console.error(error);
  }
}

export default createPost;
