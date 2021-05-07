import setToken from ".";
import { token } from "../../../InitialState/data";

describe("Testing function to set login token", () => {
    test("When payload does not exist it will do nothing", () => {
      const prevState = {};
      const state = setToken(prevState, {});
      expect(prevState).toBe(state);
    });
  
    test("When payload is not a string, it will return the same state", () => {
      const prevState = {};
      const state = setToken(prevState, { payload: null });
      expect(prevState).toBe(state);
    });
  
    test("When payload is a string, it will return the state with the payload as status", () => {
      const prevState = {};
      const mockToken = "mockToken";
      const action = {payload: mockToken};
      const state = setToken(prevState, action);
      expect(prevState).not.toBe(state);
      expect(state).toHaveProperty(token, mockToken);
    });
  });