import { OP_PROCESSING } from "../OperationStates";
import signUpOp from ".";

describe("Testing function to update sign up operation in state", () => {
  test("When payload does not exist it will ", () => {
    const prevState = {};
    const state = signUpOp(prevState, {});
    expect(prevState).toBe(state);
  });

  test("When payload is not a string, it will return the same state", () => {
    const prevState = {};
    const state = signUpOp(prevState, { payload: null });
    expect(prevState).toBe(state);
  });

  test("When payload is a string, it will return the state with the payload as status", () => {
    const prevState = {};
    const action = {payload: OP_PROCESSING};
    const state = signUpOp(prevState, action);
    expect(prevState).not.toBe(state);
    expect(state).toHaveProperty("signup");
    expect(state["signup"]).toHaveProperty("status", OP_PROCESSING);
  });
});
