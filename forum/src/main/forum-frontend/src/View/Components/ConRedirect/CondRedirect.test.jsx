import { render } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import CondRedirect from ".";

describe("Testing conditional redirect component", () => {
  test("When it doesn't have address it won't redirect", () => {
    const initialRoute = "/";
    let testLocation;
    render(
      <MemoryRouter initialEntries={[initialRoute]}>
        <CondRedirect />
        <Route
          path="*"
          render={({ history, location }) => {
            testLocation = location;
          }}
        />
      </MemoryRouter>
    );
    expect(testLocation).toHaveProperty("pathname", initialRoute);
  });

  test("When it has address but it does not have conditional, it won't redirect", ()=>{
    const initialRoute = "/";
    const testRoute = "/test";
    let testLocation;
    render(
      <MemoryRouter initialEntries={[initialRoute]}>
        <CondRedirect to={testRoute} />
        <Route
          path="*"
          render={({ history, location }) => {
            testLocation = location;
          }}
        />
      </MemoryRouter>
    );
    expect(testLocation).toHaveProperty("pathname", initialRoute);
  });

  test("When it has an address and the condition is true, it redirects", ()=>{
    const initialRoute = "/";
    const testRoute = "/test";
    let testLocation;
    render(
      <MemoryRouter initialEntries={[initialRoute]}>
        <CondRedirect to={testRoute} condition={true} />
        <Route
          path="*"
          render={({ history, location }) => {
            testLocation = location;
          }}
        />
      </MemoryRouter>
    );
    expect(testLocation).toHaveProperty("pathname", testRoute);
  });
});
