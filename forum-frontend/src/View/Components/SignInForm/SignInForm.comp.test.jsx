import { cleanup, render, screen } from "@testing-library/react";
import SignInForm from "./SignInForm.comp";

describe("Testing form to sign in", () => {
  afterEach(cleanup);

  test("Testing component without attributes", () => {
    render(<SignInForm />);
    expect(screen.getByRole("textbox", { name: "Username" }));
    expect(screen.getByLabelText("Password"));
    expect(screen.getByRole("button", { name: "Sign In" }));
    expect(screen.getByRole("link", { name: "Don't have an account? Sign Up" }));
  });

  test.todo("Data validation");
  test.todo("Data submit");
  test.todo("Link to sign up page");
  test.todo("Disable button when submitting");

});
