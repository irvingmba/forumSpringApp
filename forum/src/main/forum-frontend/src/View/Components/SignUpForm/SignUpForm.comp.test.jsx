import { cleanup, render, screen } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import { MemoryRouter, Route } from "react-router-dom";
import SignUpForm from ".";
import { ROUTE_SIGNIN } from "../../../Integration/Router/Routes/Routes";

describe("Testing sign up component", () => {
  afterEach(cleanup);

  test("Testing component without attributes", () => {
    render(
      <MemoryRouter>
        <SignUpForm />
      </MemoryRouter>
    );
    expect(screen.getByRole("textbox", { name: "Username" })).toBeDefined();
    expect(
      screen.getByRole("textbox", { name: "Email Address" })
    ).toBeDefined();
    expect(screen.getByLabelText("Password")).toBeDefined();
    expect(screen.getByRole("button", { name: "Sign Up" })).toBeDefined();
  });

  test("When typing on inputs, value changes", () => {
    render(
      <MemoryRouter>
        <SignUpForm />
      </MemoryRouter>
    );
    const username = screen.getByRole("textbox", { name: "Username" });
    const email = screen.getByRole("textbox", { name: "Email Address" });
    const password = screen.getByLabelText("Password");
    const usernameText = "username text",
      emailText = "example@example.com",
      passwordText = "password_test";
    fireEvent.type(username, usernameText);
    fireEvent.type(email, emailText);
    fireEvent.type(password.querySelector("input"), passwordText);
    expect(username).toHaveProperty("value", usernameText);
    expect(email).toHaveProperty("value", emailText);
    expect(password.querySelector("input")).toHaveProperty(
      "value",
      passwordText
    );
  });

  test.todo("Disable button when submitting");
});

describe("Testing data handling", () => {
  afterEach(cleanup);

  test("It does not submit form if fields are empty or does not pass validation", () => {
    const mockSubmit = jest.fn();
    render(
      <MemoryRouter>
        <SignUpForm submitTo={mockSubmit} />
      </MemoryRouter>
    );
    const username = screen.getByRole("textbox", { name: "Username" }),
      email = screen.getByRole("textbox", { name: "Email Address" }),
      password = screen.getByLabelText("Password"),
      submitButton = screen.getByRole("button", { name: "Sign Up" });
    const usernameText = "",
      emailText = "",
      passwordText = "password_test";
    fireEvent.type(username, usernameText);
    fireEvent.type(email, emailText);
    fireEvent.type(password.querySelector("input"), passwordText);
    fireEvent.click(submitButton);
    expect(mockSubmit).not.toHaveBeenCalled();
  });

  test("It submits form if fields are ok", () => {
    const mockSubmit = jest.fn();
    render(
      <MemoryRouter>
        <SignUpForm submitTo={mockSubmit} />
      </MemoryRouter>
    );
    const username = screen.getByRole("textbox", { name: "Username" }),
      email = screen.getByRole("textbox", { name: "Email Address" }),
      password = screen.getByLabelText("Password"),
      submitButton = screen.getByRole("button", { name: "Sign Up" });
    const usernameText = "username text",
      emailText = "example@example.com",
      passwordText = "password_test";
    fireEvent.type(username, usernameText);
    fireEvent.type(email, emailText);
    fireEvent.type(password.querySelector("input"), passwordText);
    fireEvent.click(submitButton);
    expect(mockSubmit).toHaveBeenCalled();
  });
});

describe("Testing of router functionality", ()=>{
  test("Testing link to go to sign in page", () => {
    let testHistory, testLocation;
    render(
      <MemoryRouter>
        <SignUpForm />
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
      name: "Already have an account? Sign in",
    });
    fireEvent.click(link);
    expect(testLocation.pathname).toEqual(ROUTE_SIGNIN);
  });
});