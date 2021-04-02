import { cleanup, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AppWithRoutes from ".";

describe("Testing application component with routes", () => {

  afterEach(cleanup);

  test("Rendering complete application with routes", () => {
    const { container } = render(
      <MemoryRouter>
        <AppWithRoutes />
      </MemoryRouter>
    );
    expect(container).toHaveProperty("children");
    expect(container.children).not.toHaveLength(0);
  });

});
