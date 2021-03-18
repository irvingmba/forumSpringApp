import curry from "./curry";

describe("Testing function to convert any function into a currying function", () => {
  test("When executed without arguments it throws", () => {
    expect(() => curry()).toThrow();
  });

  test("When passed a function it returns a function", () => {
    const curried = curry(jest.fn());
    expect(curried).toBeDefined();
    expect(typeof curried).toEqual("function");
  });

  test("Testing a function with an arity of 2", () => {
    const curried = curry(jest.fn((a,b)=>a+b));
    const five = curried(5);
    expect(typeof five).toEqual("function");
    const plusThree = five(3);
    expect(plusThree).toEqual(8);
    expect(curried(5,3)).toEqual(8);
  });

  test("Using an empty parameter it will count as undefined", () => {
    const curried = curry(jest.fn((a,b)=>a+b));
    const blank = curried();
    const a = blank("a");
    expect(a).toEqual("undefineda");
  });
});
