import curry from "../../../Utils/Functional/curry";
import postData from "../../../Utils/http/simpleReq/PostData";
import { signInEndpoint } from "../Routes";

const sendSignIn = curry(postData)(signInEndpoint);

export default sendSignIn;
