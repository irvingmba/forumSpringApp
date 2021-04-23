import { all } from "redux-saga/effects";
import watchSignUpSaga from "./SignUp/WatchSignUpSaga";

function* rootSaga(){
    yield all([watchSignUpSaga()]);
};

export default rootSaga;