import { history } from "../Routes";
import { ROUTE_SIGNIN } from "../Routes/Routes";

function goSignIn() {
  history.push(ROUTE_SIGNIN);
}

export default goSignIn;
