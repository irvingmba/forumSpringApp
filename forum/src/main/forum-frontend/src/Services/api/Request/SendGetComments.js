import curry from "../../../Utils/Functional/curry";
import postData from "../../../Utils/http/simpleReq/PostData";
import { commentsRoute } from "../Routes";

const sendGetComments = curry(postData)(commentsRoute);

export default sendGetComments;