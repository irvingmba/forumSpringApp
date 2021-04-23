const { default: extractValues } = require("./ExtractValues");

describe("Testing function to extract value properties of keys", () => {
  test("Testing function without parameters", () => {
    expect(() => extractValues()).toThrow();
  });

  test("Testing function with object without value fields", () => {
      expect(extractValues({})).toEqual({});
      expect(extractValues({test:"test"})).toEqual({});
  });

  test("Testing function with valid values within the object", () => {
      const test = {name:{value:"testing"}};
      const expected = {name: "testing"};
      expect(extractValues(test)).toEqual(expected);
  });
});
