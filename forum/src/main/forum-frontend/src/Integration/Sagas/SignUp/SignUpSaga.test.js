import { runSaga } from "redux-saga";
import * as sendSignUp from "../../../Services/api/Request/SendSignUp";
import * as extractValues from "../../../Utils/Formatters/ExtractValues";
import signUpAct from "./signUpAct";
import signUpSaga from "./SignUpSaga";

// __spies__
const spyExtractor = jest.spyOn(extractValues, "default");
const spySend = jest.spyOn(sendSignUp, "default");

describe("Testing sign up saga", () => {
  test("Sign up saga execution", async () => {
    const action = signUpAct();
    const dispatched = [];

    spyExtractor.mockImplementationOnce(jest.fn());
    spySend.mockImplementationOnce(jest.fn());

    const saga = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
        getState: () => ({ value: "test" }),
      },
      signUpSaga,
      action
    ).toPromise();

    expect(dispatched).toHaveLength(2);
    expect(spyExtractor).toHaveBeenCalled();
    expect(spySend).toHaveBeenCalled();
  });
});
