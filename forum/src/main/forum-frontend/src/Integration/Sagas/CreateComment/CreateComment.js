import { call, put, select } from "redux-saga/effects";
import extractValues from "../../../Utils/Formatters/ExtractValues";
import { dataActions } from "../../State/Reducers/data";
import { socketAct } from "../Socket";

function* createComment(action) {
  try {
    const { payload } = action;
    const formatted = yield call(extractValues, payload);
    yield call(console.log, formatted);
    const data = yield select((state) => {
      return state.data
    })
    const post = data.selectedPost;
    const profile = data.profile;
    yield put(
      dataActions.insertComment({
        description: formatted.comment,
        author: profile.username,
        post_id: post.post_id,
        r_date: new Date().toString(),
        reply_id: null,
      })
    );
    yield put(socketAct());
  } catch (error) {
    console.error(error);
  }
}

export default createComment;
