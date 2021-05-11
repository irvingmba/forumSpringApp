import { takeEvery } from "redux-saga/effects";
import createComment from "./CreateComment";
import { ASYNC_CREATE_COMMENT } from "./CreateComment/CreateCommentAct";
import createPost from "./CreatePost";
import { ASYNC_CREATE_POST } from "./CreatePost/CreatePostAct";
import getComments from "./GetComments";
import { ASYNC_GET_COMMENTS } from "./GetComments/GetCommentsAct";
import getPosts from "./GetPosts";
import { ASYNC_GET_POSTS } from "./GetPosts/GetPostsAct";
import getTopics from "./GetTopics";
import { ASYNC_GET_TOPICS } from "./GetTopics/GetTopicsAct";
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
  yield takeEvery(ASYNC_GET_TOPICS, getTopics);
  yield takeEvery(ASYNC_GET_POSTS, getPosts);
  yield takeEvery(ASYNC_GET_COMMENTS, getComments);
  yield takeEvery(ASYNC_CREATE_POST, createPost);
  yield takeEvery(ASYNC_CREATE_COMMENT, createComment);
}

export default rootSaga;
