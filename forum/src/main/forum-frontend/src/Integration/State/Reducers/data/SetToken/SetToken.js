import { token } from "../../../InitialState/data";

function setToken(state, action) {
  const { payload } = action;
  return typeof payload !== "string" ? state : { ...state, [token]: payload };
}

export default setToken;
