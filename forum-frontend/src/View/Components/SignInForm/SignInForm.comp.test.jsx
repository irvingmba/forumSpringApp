import { cleanup, render, screen } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import { MemoryRouter, Route } from "react-router-dom";
import { ROUTE_SIGNUP } from "../../../Integration/Router/Routes";
import SignInForm from "./SignInForm.comp";

describe("Testing form to sign in", () => {
  afterEach(cleanup);

  test("Testing component without attributes", () => {
    const { container } = render(
      <MemoryRouter>
        <SignInForm />
      </MemoryRouter>
    );
    expect(screen.getByRole("textbox", { name: "Username" }));
    expect(container.querySelector("[type='password']"));
    expect(screen.getByRole("button", { name: "Sign In" }));
    expect(
      screen.getByRole("link", { name: "Don't have an account? Sign Up" })
    );
  });

  test("When typing on inputs, value changes", () => {
    const { container } = render(
      <MemoryRouter>
        <SignInForm />
      </MemoryRouter>
    );
    const text = "This is a testing";
    const username = screen.getByRole("textbox", { name: "Username" });
    fireEvent.type(username, text);
    expect(username).toHaveProperty("value", text);
    const password = container.querySelector("[type='password']");
    fireEvent.type(password, text);
    expect(password).toHaveProperty("value", text);
  });

  test.todo("Data validation");
  test.todo("Disable button when submitting");
});

describe("Testing data handling", () => {
  afterEach(cleanup);

  test("When passed a function to submit data, form executes it", () => {
    const mock = jest.fn();
    const { container } = render(
      <MemoryRouter>
        <SignInForm submitTo={mock} />
      </MemoryRouter>
    );
    const text = "This is a testing";
    const username = screen.getByRole("textbox", { name: "Username" });
    fireEvent.type(username, text);
    const password = container.querySelector("[type='password']");
    fireEvent.type(password, text);
    fireEvent.click(screen.getByRole("button", { name: "Sign In" }));
    expect(mock).toHaveBeenCalled();
  });
});

describe("Testing routing", () => {
  afterEach(cleanup);

  test("Testing link to go to sign up page", () => {
    let testHistory, testLocation;
    render(
      <MemoryRouter>
        <SignInForm />
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
    const link = screen.getByRole("link", {
      name: "Don't have an account? Sign Up",
    });
    fireEvent.click(link);
    expect(testLocation.pathname).toEqual(ROUTE_SIGNUP);
  });
});
