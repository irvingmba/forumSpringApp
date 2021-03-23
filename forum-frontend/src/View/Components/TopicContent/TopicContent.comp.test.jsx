import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TopicContent from ".";

describe("Testing rendering of topic content component", () => {

  test("Rendering without arguments should display a generic content", () => {
    const { container } = render(
      <MemoryRouter>
        <TopicContent />
      </MemoryRouter>
    );
    expect(container.children).not.toHaveLength(0);
  });
});
