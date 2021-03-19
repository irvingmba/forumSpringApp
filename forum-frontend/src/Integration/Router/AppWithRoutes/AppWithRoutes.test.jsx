import { cleanup, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AppWithRoutes from ".";
import * as routes from "../Routes/Routes";

describe("Testing application component with routes", () => {
  const arrayRoutes = [];
  for (const key in routes) {
    arrayRoutes.push([routes[key]]);
  }

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

  test.each(arrayRoutes)("Testing route %s", () => {
    const { container } = render(
      <MemoryRouter initialEntries={[routes.ROUTE_ROOT]}>
        <AppWithRoutes />
      </MemoryRouter>
    );
    expect(container).toHaveProperty("children");
    expect(container.children).not.toHaveLength(0);
  });
});
