import errorsReducer from "./errorsReducer";

describe("Testing function for reducer of errors", () => {
    test("Executing the reducer without parameters will throw", () => {
      expect(() => errorsReducer()).toThrow();
    });
  });
  
  describe("Testing functionality of errors reducer", () => {
    test("When action type is invalid it returns initial state", () => {
      const state = { hello: "world" };
      const action = {type: "invalid", payload: "wrong"};
      const res = errorsReducer(state, action);
      expect(res).toBe(state);
    });
  });