import { createAction } from "@reduxjs/toolkit";

const SIGN_UP_ACT = "SIGN_UP_ACT";

const signUpAct = createAction(SIGN_UP_ACT);

export default signUpAct;
export { SIGN_UP_ACT };
