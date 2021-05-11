import postData from "../../../Utils/http/simpleReq/PostData";
import { topicRoute } from "../Routes";

function sendGetTopics(){
    const req = {type: "get", msg: "topics"}
    return postData(topicRoute, req);
};

export default sendGetTopics;