import isValidFormData from "./isValidFormData";

describe("Testing data validator function", () => {
  test("If parameters are not passed, it will throw", () => {
    expect(() => isValidFormData()).toThrow();
  });

  test("If validator within validators parameter is empty, it will return false", () => {
    expect(isValidFormData([], {})).toBeFalsy();
  });

  test("If validation fails, it will return false", () => {
    const rule = {
      validator: jest.fn(),
      condition: true,
      message: "Rule message",
    };
    const rule2 = {
      validator: jest.fn(()=>true),
      condition: true,
      message: "Rule message",
    };
    const validators = { name: "Test", rules: [rule, rule2] };
    const data = { Test: { value: "Something" } };
    expect(isValidFormData([validators], data)).toBeFalsy();
    expect(rule.validator).toHaveBeenCalled();
  });

  test("If validation is fine, it will return true", () => {
    const rule = {
      validator: jest.fn(()=>true),
      condition: true,
      message: "Rule message",
    };
    const validators = { name: "Test", rules: [rule] };
    const data = { Test: { value: "Something" } };
    expect(isValidFormData([validators], data)).toBeTruthy();
    expect(rule.validator).toHaveBeenCalled();
  });

});
