import { cleanup, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RouteWithTopic from "./RouteWithTopic.comp";

// __spies__
const spyCslError = jest.spyOn(console, "error");

describe("Testing component with route customizer and topic", () => {
  beforeEach(() => {
    spyCslError.mockReset();
  });

  afterEach(cleanup);

  test("Rendering component without props, will display nothing", () => {
    const { container } = render(<RouteWithTopic />);
    expect(container.children).toHaveLength(0);
    expect(spyCslError).not.toHaveBeenCalled();
  });

  test("If called with invalid prop, it will warn", () => {
    render(
      <MemoryRouter>
        <RouteWithTopic uri={1234} />
      </MemoryRouter>
    );
    expect(spyCslError).toHaveBeenCalled();
  });
});
