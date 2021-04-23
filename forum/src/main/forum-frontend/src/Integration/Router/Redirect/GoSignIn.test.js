import goSignIn from "./GoSignIn";
import {history} from "../Routes";
import { ROUTE_SIGNIN } from "../Routes/Routes";

// __spies__
const spyHistoryPush = jest.spyOn(history, "push");

describe("Testing function to redirect to sign in page", () => {

  test("Testing go to sign in functionality", () => {
    spyHistoryPush.mockImplementationOnce(jest.fn());
    goSignIn();
    expect(spyHistoryPush).toHaveBeenCalledWith(ROUTE_SIGNIN);
  });
});
