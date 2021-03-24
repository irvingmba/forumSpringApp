import { render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SignInPage from "./SigInPage.comp";

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

  test.todo("Check route");
});
