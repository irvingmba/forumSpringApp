import {operationsReducer} from ".";

describe("Testing function for reducer of operations", () => {
    test("Executing the reducer without parameters will throw", () => {
      expect(() => operationsReducer()).toThrow();
    });
  });
  
  describe("Testing functionality of operations reducer", () => {
    test("When action type is not present it returns initial state", () => {
      const state = { hello: "world" };
      const action = {type: "invalid", payload: "wrong"};
      const res = operationsReducer(state, action);
      expect(res).toBe(state);
    });
  });