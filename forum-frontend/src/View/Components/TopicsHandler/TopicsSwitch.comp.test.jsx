import { cleanup, render, screen } from "@testing-library/react";
import { Link, MemoryRouter, Route } from "react-router-dom";
import fireEvent from "@testing-library/user-event";
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

  test("When passing array with proper objects, it will render just default topic", () => {
    const topics = [{ title: "", posts: [], uri: "/uri" }];
    const { container } = render(
      <MemoryRouter>
        <TopicsSwitch topics={topics} />
      </MemoryRouter>
    );
    expect(spyCslError).not.toHaveBeenCalled();
    expect(() => screen.getAllByRole("feed")).toThrow();
  });
});

describe("Testing functionality of topic switch component", () => {
  beforeEach(() => {
    spyCslError.mockReset();
  });

  afterEach(cleanup);

  test("When rendering a topic with root uri, it will be displayed", () => {
    let testHistory, testLocation;
    const topics = [{ title: "", posts: [], uri: "/" }];
    render(
      <MemoryRouter>
        <TopicsSwitch topics={topics} />
        <Route
          path="*"
          render={({ history, location }) => {
            testHistory = history;
            testLocation = location;
            return null;
          }}
        />
      </MemoryRouter>
    );
    expect(spyCslError).not.toHaveBeenCalled();
    expect(screen.getAllByRole("feed")).toHaveLength(topics.length);
  });

  test("When rendering a topic default topic will disappear", () => {
    let testHistory, testLocation;
    const uri = "/uri"
    const topics = [{ title: "", posts: [], uri }];
    const defaultTopic = <div role="article">default</div>
    render(
      <MemoryRouter>
        <TopicsSwitch topics={topics} defaultTopic={defaultTopic} />
        <Link to={uri}>to topic</Link>
        <Route
          path="*"
          render={({ history, location }) => {
            testHistory = history;
            testLocation = location;
            return null;
          }}
        />
      </MemoryRouter>
    );
    expect(spyCslError).not.toHaveBeenCalled();
    const defaultComp = screen.getByRole("article")
    expect(defaultComp).toBeInTheDocument();
    fireEvent.click(screen.getByRole("link", {name: "to topic"}));
    expect(screen.getAllByRole("feed")).toHaveLength(topics.length);
    expect(defaultComp).not.toBeInTheDocument();
  });
});
