import { cleanup, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import General from ".";

// spies
const spyCslError = jest.spyOn(console,"error");

describe("Testing rendering of general topic page", () => {
  spyCslError.mockImplementation(jest.fn());
  beforeEach(()=>{
    spyCslError.mockReset();
  })
  
  afterEach(cleanup);

  test("Rendering component without properties", () => {
    const { container } = render(
      <MemoryRouter>
        <General />
      </MemoryRouter>
    );
    expect(container.children).not.toHaveLength(0);
  });
});
