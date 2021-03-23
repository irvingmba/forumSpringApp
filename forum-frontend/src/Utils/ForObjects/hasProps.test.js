import hasProps from "./hasProps";

describe("Testing function that checks if passed properties are within an object", () => {
  test("Executing function without parameters will throw", () => {
    expect(() => hasProps()).toThrow();
  });

  test.each([
    [null],
    [1235],
    [{}],
    [[]],
    [jest.fn()],
    [true],
    [Symbol("example@example.com")],
  ])("When passing '%s', it will throw", (value) => {
    expect(() => hasProps(value, value)).toThrow();
  });

  test("When there are not all properties within passed object, it returns false", ()=>{
      const props = ["hello", "world"];
      expect(hasProps(props, {})).toBeFalsy();
  });

  test("When all properties are within passed object, it returns true", ()=>{
      const props = ["hello", "world"];
      const obj = {hello: null, world: undefined}
      expect(hasProps(props, obj)).toBeTruthy();
  });
});
