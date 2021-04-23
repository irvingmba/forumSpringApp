import curry from "../../../Utils/Functional/curry";
import postData from "../../../Utils/http/simpleReq/PostData";
import { signUpEndpoint } from "../Routes";

const sendSignUp = curry(postData)(signUpEndpoint);

export default sendSignUp;
