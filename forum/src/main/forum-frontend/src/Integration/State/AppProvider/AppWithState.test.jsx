import { cleanup, render } from "@testing-library/react";
import AppWithState from "./AppWithState";

describe("Testing application within the state provider", () => {
  afterEach(cleanup);

  test("Rendering of app", () => {
    const { container } = render(<AppWithState />);
    expect(container.children).not.toHaveLength(0);
  });
});
