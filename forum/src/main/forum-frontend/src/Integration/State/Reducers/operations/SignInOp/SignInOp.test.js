import signInOp from ".";
import { signInNS } from "../../../InitialState/operations";
import { OP_PROCESSING } from "../OperationStates";

describe("Testing function to update sign up operation in state", () => {
  test("When payload does not exist it will ", () => {
    const prevState = {};
    const state = signInOp(prevState, {});
    expect(prevState).toBe(state);
  });

  test("When payload is not a string, it will return the same state", () => {
    const prevState = {};
    const state = signInOp(prevState, { payload: null });
    expect(prevState).toBe(state);
  });

  test("When payload is a string, it will return the state with the payload as status", () => {
    const prevState = {};
    const action = {payload: OP_PROCESSING};
    const state = signInOp(prevState, action);
    expect(prevState).not.toBe(state);
    expect(state).toHaveProperty(signInNS);
    expect(state[signInNS]).toHaveProperty("status", OP_PROCESSING);
  });
});
