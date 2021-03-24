import rootReducer from "./rootReducer";

describe("Testing root reducer", () => {
  test("When executing wihtout parameters, it will throw", () => {
    expect(() => rootReducer()).toThrow();
  });
});

describe("Testing functionality of root reducer", ()=>{
    test("When action type is invalid it returns initial state", () => {
        const action = {type: "invalid", payload: "wrong"};
        const res = rootReducer({}, action);
        expect(res).toBeDefined();
      });
})