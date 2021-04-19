import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TopicContent from ".";

describe("Testing rendering of topic content component", () => {
  afterEach(cleanup);

  test("Rendering without arguments should display a generic content", () => {
    const { container } = render(
      <MemoryRouter>
        <TopicContent />
      </MemoryRouter>
    );
    expect(container.children).not.toHaveLength(0);
    // expect(screen.getByRole("article", {name:"No posts"})).toBeInTheDocument();
  });

  test.todo("Rendering with arguments, it should display the information")
});
