import { cleanup, render } from "@testing-library/react";
import FeaturedPost from ".";

describe("Testing featured post component rendering", () => {
  afterEach(cleanup);

  test("Rendering without parameters", () => {
    const { container } = render(<FeaturedPost />);
    expect(container).toHaveProperty("children");
    expect(container.children).not.toHaveLength(0);
  });
});
