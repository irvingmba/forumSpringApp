import { cleanup, render, screen } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import { MemoryRouter, Route } from "react-router-dom";
import NavBar from ".";
import {
  ROUTE_ROOT,
  ROUTE_SIGNIN,
  ROUTE_SIGNUP,
} from "../../../Integration/Router/Routes/Routes";

describe("Testing general navigation bar component", () => {
  afterEach(cleanup);

  test("Rendering component without parameters", () => {
    const { container } = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    expect(container).toHaveProperty("children");
    expect(container.children).not.toHaveLength(0);
  });

  test("Clicking on forum logo, takes you to root", () => {
    let testHistory, testLocation;
    render(
      <MemoryRouter>
        <NavBar />
        <Route
          path="*"
          render={({ history, location }) => {
            testHistory = history;
            testLocation = location;
            return null;
          }}
        />
      </MemoryRouter>
    );
    const link2Root = screen.getByRole("link", { name: "Go to main page" });
    expect(link2Root).toBeDefined();
    fireEvent.click(link2Root);
    expect(testLocation.pathname).toEqual(ROUTE_ROOT);
  });
});

describe("Testing functionality of buttons in navigation bar", () => {
  afterEach(cleanup);

  test("Home button is not displayed on home and shows when other route is present", () => {
    let testHistory, testLocation;
    render(
      <MemoryRouter>
        <NavBar />
        <Route
          path="*"
          render={({ history, location }) => {
            testHistory = history;
            testLocation = location;
            return null;
          }}
        />
      </MemoryRouter>
    );
    expect(screen.queryByRole("button", {name:"Home"})).not.toBeInTheDocument();
    fireEvent.click(screen.queryByRole("button", {name:"Sign in"}));
    expect(screen.queryByRole("button", {name:"Home"})).toBeInTheDocument();
  });

  test("Sign in button is displayed on home and does not show in sign in route", () => {
    let testHistory, testLocation;
    render(
      <MemoryRouter>
        <NavBar />
        <Route
          path="*"
          render={({ history, location }) => {
            testHistory = history;
            testLocation = location;
            return null;
          }}
        />
      </MemoryRouter>
    );
    const signIn = screen.getByRole("button", {name:"Sign in"});
    expect(signIn).toBeInTheDocument();
    fireEvent.click(signIn);
    expect(signIn).not.toBeInTheDocument();
  });

  test("Sign up button is displayed on home and does not show in sign up route", () => {
    let testHistory, testLocation;
    render(
      <MemoryRouter>
        <NavBar />
        <Route
          path="*"
          render={({ history, location }) => {
            testHistory = history;
            testLocation = location;
            return null;
          }}
        />
      </MemoryRouter>
    );
    const signUp = screen.getByRole("button", {name:"Sign up"});
    expect(signUp).toBeInTheDocument();
    fireEvent.click(signUp);
    expect(signUp).not.toBeInTheDocument();
  });

});
