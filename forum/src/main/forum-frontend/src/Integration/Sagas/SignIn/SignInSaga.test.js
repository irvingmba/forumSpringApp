import { runSaga } from "redux-saga";
import * as sendSignIn from "../../../Services/api/Request/SendSignIn";
import * as extractValues from "../../../Utils/Formatters/ExtractValues";
import signInAct from "../SignIn/SignInAct";
import signInSaga from "./SignInSaga";

// __spies__
const spyExtract = jest.spyOn(extractValues, "default");
const spySend = jest.spyOn(sendSignIn, "default");

describe("Testing saga procedure after sign in submission", () => {
  test("Sign in saga execution", async () => {
    const action = signInAct();
    const dispatched = [];

    spyExtract.mockImplementationOnce(jest.fn());
    spySend.mockReturnValueOnce({});

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
        getState: () => ({ value: "test" }),
      },
      signInSaga,
      action
    ).toPromise();

    expect(spyExtract).toHaveBeenCalled();
    expect(spySend).toHaveBeenCalled();
    expect(dispatched).toHaveLength(2);
  });
});
