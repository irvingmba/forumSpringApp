import curry from "../../../Utils/Functional/curry";
import postData from "../../../Utils/http/simpleReq/PostData";
import { postsRoute } from "../Routes";

const sendGetPosts = curry(postData)(postsRoute);

export default sendGetPosts;

export function buildGetPostObj(topicId) {
  return {
    type: "getPosts",
    msg: topicId.toString(),
  };
}
