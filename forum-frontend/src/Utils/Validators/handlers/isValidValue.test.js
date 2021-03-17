import isValidValue from "./isValidValue";

describe("Testing function to check if the passed value is valid according to passed rules", () => {
  test("When called without parameters it will throw", () => {
    expect(() => isValidValue()).toThrow();
  });

  test("It throws if rules are not in an array", () => {
    expect(() => isValidValue({}, "")).toThrow("Rules must be in an array");
  });

  test("If there are not rules, it will return true", () => {
    expect(isValidValue([], "")).toBeTruthy();
  });

  test("If validator function within a rule is not a function, it will throw", () => {
    const rule = { validator: {}, condition: "", message: "" };
    expect(() => isValidValue([rule], "")).toThrow(
      "Validator is not a function"
    );
  });

  test("If validation fails, it will return false and a message in the callback", () => {
    const validator = jest.fn();
    validator.mockReturnValueOnce(false);
    const message = "Test message";
    const callback = jest.fn();
    const rule = { validator, condition: true, message };
    expect(isValidValue([rule], "", callback)).toBeFalsy();
    expect(callback).toHaveBeenCalledWith(message);
  });

  test("If validation is ok, it will return true", () => {
    const validator = jest.fn();
    validator.mockReturnValueOnce(true);
    const message = "Test message";
    const callback = jest.fn();
    const rule = { validator, condition: true, message };
    expect(isValidValue([rule], "", callback)).toBeTruthy();
    expect(callback).not.toHaveBeenCalled();
  });
});
