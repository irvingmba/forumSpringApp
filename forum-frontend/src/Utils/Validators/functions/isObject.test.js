describe("Testing function to check if a value is an object", () => {
  test.each([
    [{}, true],
    ["asd", false],
    [123, false],
    [Symbol(), false],
    [[], false],
    [jest.fn(), false],
    [null, false],
    [undefined, false]
  ])("When pass %s, it will return %s", () => {});
});
