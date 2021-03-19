import { render, screen } from "@testing-library/react";
import TopicBar from "./TopicBar.comp";
import {topicRoutes} from "../../../Integration/Router/Routes"

describe("Testing main page rendering", () => {

  test("Topic bar renders without parameters", () => {
    const { container } = render(<TopicBar />);
    expect(container).toHaveProperty("children");
    expect(container.children).not.toHaveLength(0);
  });

  test("Topic bar renders all the topics passed", () => {
    render(<TopicBar topics={topicRoutes} />);
    expect(screen.getAllByRole("link")).toHaveLength(topicRoutes.length);
  });
});
