import { cleanup, render, screen } from "@testing-library/react";
import SignUp from "./SignUp.comp";

describe("Testing sign up component", () => {
  afterEach(cleanup);

  test("Testing component without attributes", () => {
    render(<SignUp />);
    expect(screen.getByRole("textbox", { name: "Username" })).toBeDefined();
    expect(
      screen.getByRole("textbox", { name: "Email Address" })
    ).toBeDefined();
    expect(screen.getByLabelText("Password")).toBeDefined();
    expect(screen.getByRole("button", { name: "Sign Up" })).toBeDefined();
  });

  test.todo("Form validation");
  test.todo("Sign up click button");
  test.todo("Change to sign in page");
  test.todo("Disable button when submitting");

});
