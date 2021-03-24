import { render, cleanup } from "@testing-library/react";
import MainFeaturedPost from ".";
import { mainPost } from "../../Content";

// __spies__
const spyCslError = jest.spyOn(console, "error");

describe("Testing Main Featured post component", () => {
  beforeEach(() => {
    spyCslError.mockReset();
  });

  afterEach(cleanup);

  test("Rendering component without parameters will show nothing", () => {
    spyCslError.mockImplementationOnce(jest.fn());
    expect(() => render(<MainFeaturedPost />)).toThrow();
  });

  test("Passing a post to component will make it render", ()=>{
    const {container} = render(<MainFeaturedPost post={mainPost} />);
    expect(container).toHaveProperty("children");
    expect(container.children).not.toHaveLength(0);
  });
});
