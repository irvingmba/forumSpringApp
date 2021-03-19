import { cleanup, render } from "@testing-library/react";
import General from ".";

describe("Testing rendering of general topic page", () => {
  afterEach(cleanup);

  test("Rendering component without properties", () => {
    const { container } = render(<General />);
    expect(container.children).not.toHaveLength(0);
  });
});
