import { render, screen } from "@testing-library/react";
import Main from "./Main.comp";

describe("Testing main page rendering", () => {
  const sections = [
    { title: "one", url: "one" },
    { title: "one", url: "one" },
    { title: "one", url: "one" },
  ];
  
  test("Main page renders without parameters", () => {
    const { container } = render(<Main />);
    expect(container).toHaveProperty("children");
    expect(container.children).not.toHaveLength(0);
  });
});
