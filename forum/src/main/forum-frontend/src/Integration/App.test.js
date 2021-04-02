import { render } from "@testing-library/react";
import App from "./App";

describe("Testing complete application", () => {
  test("Application is rendering at first time", () => {
    const { container } = render(
        <App />
    );
    expect(container).toHaveProperty("children");
    expect(container.children).not.toHaveLength(0);
  });
});
