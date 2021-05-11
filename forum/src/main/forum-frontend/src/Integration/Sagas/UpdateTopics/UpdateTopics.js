import { call, take } from "redux-saga/effects";
import { ASYNC_UPDATE_TOPICS } from "./UpdateTopicsAct";

function* updateTopics(socket){
    while(true){
        yield take(ASYNC_UPDATE_TOPICS);
        yield call(console.log, "updating topics");
        // socket.emit("/topic/post", "1");
        yield call(console.log, socket);
    };
};

export default updateTopics;