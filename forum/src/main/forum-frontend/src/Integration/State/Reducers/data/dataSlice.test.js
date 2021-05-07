import dataReducer from ".";

describe("Testing function for reducer of data", () => {
  test("Executing the reducer without parameters will throw", () => {
    expect(() => dataReducer()).toThrow();
  });
});

describe("Testing functionality of data reducer", () => {
  test("When action type is invalid it returns initial state", () => {
    const state = { hello: "world" };
    const action = {type: "invalid", payload: "wrong"};
    const res = dataReducer(state, action);
    expect(res).toBe(state);
  });
});
