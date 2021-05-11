import { call, put } from "redux-saga/effects";
import { sendGetPosts } from "../../../Services/api/Request";
import { buildGetPostObj } from "../../../Services/api/Request/SendGetPosts";
import { dataActions } from "../../State/Reducers/data";

function* getPosts(action) {
  try {
    const { payload } = action;
    const response = yield call(sendGetPosts, buildGetPostObj(payload));
    yield put(dataActions.setPosts({id: payload, posts: response.data}));
  } catch (error) {
    console.error(error);
  }
}

export default getPosts;
