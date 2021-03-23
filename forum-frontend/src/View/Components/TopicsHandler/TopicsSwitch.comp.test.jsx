import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import TopicsSwitch from ".";

// __spies__
const spyCslError = jest.spyOn(console, "error");

describe("Testing topic handler component", () => {
  beforeEach(() => {
    spyCslError.mockReset();
  });

  afterEach(cleanup);

  test("Rendering of topics handler without props, will render default info", () => {
    const { container } = render(
      <MemoryRouter>
        <TopicsSwitch />
      </MemoryRouter>
    );
    expect(container.children).not.toHaveLength(0);
    expect(spyCslError).toHaveBeenCalled();
  });

  test("Passing topics with unproper shape will warn", () => {
    const topics = [{ title: 123, posts: 123, uri: 123 }];
    render(
      <MemoryRouter>
        <TopicsSwitch topics={topics} />
      </MemoryRouter>
    );
    expect(spyCslError).toHaveBeenCalled();
  });

  test("When passing array with proper objects, it will render without warn", () => {
    const topics = [{ title: "", posts: [], uri: "/uri" }];
    const {getAllByRole}=render(
      <MemoryRouter>
        <TopicsSwitch topics={topics} />
      </MemoryRouter>
    );
    // expect(spyCslError).toHaveBeenCalled();
    expect(spyCslError).not.toHaveBeenCalled();
    expect(screen.getAllByRole("feed")).toHaveLength(topics.length);
  });
});
