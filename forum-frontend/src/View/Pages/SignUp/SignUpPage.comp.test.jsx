import { render, cleanup } from "@testing-library/react";
import SignUpPage from "./SignUpPage.comp";

describe("Testing sign in page", () => {
  afterEach(cleanup);

  test("Check rendering of the page", () => {
    const { container } = render(<SignUpPage />);
    expect(container.children).not.toHaveLength(0);
  });

  test.todo("Check route")
});