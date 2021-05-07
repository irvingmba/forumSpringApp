import { createAction } from "@reduxjs/toolkit";

const SIGN_IN_ACT = "SIGN_IN_ACT";

const signInAct = createAction(SIGN_IN_ACT);

export default signInAct;
export { SIGN_IN_ACT };
