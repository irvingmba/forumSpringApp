import isEmail from "../isEmail";

describe("Testing validor to check if received value is an email", () => {
  test.each([
    [undefined, false],
    ["", false],
    ["ashfie", false],
    ["example@example.com", true],
  ])("Testing validator with %s should return %s", (email, validation) => {
    validation
      ? expect(isEmail(email)).toBeTruthy()
      : expect(isEmail(email)).toBeFalsy();
  });

  test.each([
    [null],
    [1235],
    [{}],
    [[]],
    [jest.fn()],
    [true],
    [Symbol("example@example.com")]
  ])("Testing validator with %s should throw", (email) => {
    expect(() => isEmail(email)).toThrow();
  });
});
