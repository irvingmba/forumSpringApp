import { cleanup, render, screen } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import { MemoryRouter, Route } from "react-router-dom";
import Main from ".";
import { mainPost, sections } from "../../Content";

// __spies__
const spyCslError = jest.spyOn(console, "error");

describe("Testing main page rendering", () => {
  beforeEach(() => {
    spyCslError.mockReset();
  });

  afterEach(cleanup);

  test("Main page renders without parameters", () => {
    const { container } = render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );
    expect(container).toHaveProperty("children");
    expect(container.children).not.toHaveLength(0);
  });

  test("It will throw if parameters are not of proper type", () => {
    spyCslError.mockImplementationOnce(jest.fn());
    expect(() =>
      render(
        <MemoryRouter>
          <Main topics={"wrong"} />
        </MemoryRouter>
      )
    ).toThrow();
    expect(spyCslError).toHaveBeenCalled();
  });

  test("Passing a post will render the post", () => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );
    expect(screen.getByRole("article")).toBeDefined();
  });

  test("Passing a topics array will connect components to routes", () => {
    render(
      <MemoryRouter>
        <Main topics={sections} />
      </MemoryRouter>
    );
    const sectionLinks = screen.getAllByRole("link");
    expect(sectionLinks).toHaveLength(sections.length);
  });

});

describe("Testing main page functionality", () => {
  afterEach(cleanup);

  test("When pressing a link in topic bar it will get you to its route", () => {
    const section = sections[0];
    let testHistory, testLocation;
    render(
      <MemoryRouter>
        <Main topics={sections} />
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
    const link = screen.getByRole("link", { name: section.title });
    expect(link).toBeDefined();
    fireEvent.click(link);
    expect(testLocation).toHaveProperty("pathname", section.uri);
  });
});
