import { cleanup, render, screen } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import { MemoryRouter, Route } from "react-router-dom";

import TopicBar from "./TopicBar.comp";
import { topicRoutes } from "../../../Integration/Router/Routes";

describe("Testing main page rendering", () => {
  afterEach(cleanup);
  test("Topic bar renders without parameters", () => {
    const { container } = render(
      <MemoryRouter>
        <TopicBar />
      </MemoryRouter>
    );
    expect(container).toHaveProperty("children");
    expect(container.children).not.toHaveLength(0);
  });

  test("Topic bar renders all the topics passed", () => {
    render(
      <MemoryRouter>
        <TopicBar topics={topicRoutes} />
      </MemoryRouter>
    );
    expect(screen.getAllByRole("link")).toHaveLength(topicRoutes.length);
  });
});

describe("Testing topic bar functionality", () => {
  const arrayTopics = topicRoutes.map(({ title, uri }) => [title, uri]);
  afterEach(cleanup);

  test.each(arrayTopics)("Clicking on %s topic will go to %s", (title, uri) => {
    let testHistory, testLocation;
    render(
      <MemoryRouter>
        <TopicBar topics={topicRoutes} />
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
    const button = screen.getByRole("link", { name: title });
    fireEvent.click(button);
    expect(testLocation).toHaveProperty("pathname", uri);
  });
});
