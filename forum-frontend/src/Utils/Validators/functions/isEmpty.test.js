import { isEmpty } from ".";

describe("Testing validator that checks if the passed value is empty", () => {
  test.each([
    [undefined, true],
    ["", true],
    ["something", false],
    [123, false],
  ])("When parameter is '%s' it will return %s", (value, validation) => {
    validation
      ? expect(isEmpty(value)).toBeTruthy()
      : expect(isEmpty(value)).toBeFalsy();
  });

  test.each([
    [null],
    [{}],
    [[]],
    [jest.fn()],
    [true],
    [Symbol("example@example.com")],
  ])("Testing validator with '%s' should throw", (value) => {
    expect(() => isEmpty(value)).toThrow();
  });
});
