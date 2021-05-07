import {
  render,
  cleanup,
} from "../../../__test-utils__/react-redux/renderProvider";
import { MemoryRouter, Route } from "react-router-dom";
import SignInPage from "./SigInPage.comp";
import { OP_OK } from "../../../Integration/State/Reducers/operations/OperationStates";
import { ROUTE_SIGNIN } from "../../../Integration/Router/Routes/Routes";

describe("Testing sign in page", () => {
  afterEach(cleanup);

  test("Check rendering of the page", () => {
    const { container } = render(
      <MemoryRouter>
        <SignInPage />
      </MemoryRouter>
    );
    expect(container.children).not.toHaveLength(0);
  });

  test("When initialized, it replace the previous state", () => {
    let testLocation;
    const { container } = render(
      <MemoryRouter initialEntries={[ROUTE_SIGNIN]}>
        <SignInPage />
        <Route
        path="*"
        render={({history, location})=>{
          testLocation = location;
        }}
        />
      </MemoryRouter>,
      { initialState: { operations: { signup: { status: OP_OK } } } }
    );
    expect(testLocation).toHaveProperty("pathname", ROUTE_SIGNIN);
  })
});
