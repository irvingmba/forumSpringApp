import configureAppStore from "./configureStore";

describe("Testing function to create the store", () => {
  test("Executing function will create a store", () => {
    const store = configureAppStore();
    expect(store).toHaveProperty("getState");
    expect(store).toHaveProperty("subscribe");
    expect(store).toHaveProperty("dispatch");
  });
});
