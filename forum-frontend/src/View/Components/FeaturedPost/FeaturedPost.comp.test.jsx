import { cleanup, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import FeaturedPost from "./";

// __spies__
const spyCslError = jest.spyOn(console, "error");

const post = {
  title: "Voluptate ex occaecat cillum tempor culpa sint excepteur.",
  date: Date.now(),
  author: "Mars",
  content:
    "Cupidatat amet ex commodo proident nulla ut et. Aute esse reprehenderit minim velit reprehenderit incididunt ad ea sint. Quis magna duis duis qui sit nisi eiusmod cupidatat. Enim qui sit voluptate mollit sint. Labore pariatur pariatur consectetur voluptate id ea esse et adipisicing culpa ea amet excepteur consectetur.",
  link: "/samplepost",
};

describe("Testing featured post component rendering", () => {
  beforeEach(() => {
    spyCslError.mockReset();
  });

  afterEach(cleanup);

  test("Rendering without parameters", () => {
    const { container } = render(
      <MemoryRouter>
        <FeaturedPost />
      </MemoryRouter>
    );
    expect(container).toHaveProperty("children");
    expect(container.children).not.toHaveLength(0);
  });

  test("When passing other type than an object, it will throw", () => {
    spyCslError.mockImplementationOnce(jest.fn());
    expect(() =>
      render(
        <MemoryRouter>
          <FeaturedPost post={"wrong"} />
        </MemoryRouter>
      )
    ).toThrow();
  });

  test("When passing a post it will display the information", () => {
    render(
      <MemoryRouter>
        <FeaturedPost post={post} />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", {name: post.title}));
    expect(screen.getByRole("heading", {name: post.author}));
    expect(screen.getByRole("heading", {name: post.date}));
  });
});

test.todo("Handle click, modify uri and go to complete article");