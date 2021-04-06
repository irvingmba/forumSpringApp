import handleInputData from "./handleInputData";

describe("Testing utility to send the value property with a given sender", () => {
  test.each([["test"], [123], [null], [undefined], [[]], [{}], [Symbol()]])(
    "When initialized with '%s' and it is not a function, it will throw",
    () => {
      expect(() => handleInputData()).toThrow("Received parameter is not a function");
      expect(() => handleInputData()).toThrow("Received parameter is not a function");
    }
  );

  test("After initialized, if executed without event, it throws", () => {
    const sender = jest.fn();
    const initialized = handleInputData(sender);
    expect(() => initialized()).toThrow();
  });

  test("After initialized, if executed with element without value, it throws", () => {
    const sender = jest.fn();
    const initialized = handleInputData(sender);
    const div = document.createElement("div");
    const event = { target: div };
    expect(() => initialized(event)).toThrow();
  });

  test("If sender is a function, it's executed with an event parameter and element has a value property, it will work", () => {
    const sender = jest.fn();
    const initialized = handleInputData(sender);
    const input = document.createElement("input");
    const text = "test";
    const name = "test";
    input.name = name;
    input.value = text;
    const expected = {[name]: {value: text}};
    const event = { target: input };
    expect(initialized(event)).toEqual(expected);
    expect(sender).toHaveBeenCalledWith(expected);
  });
});
