import postData from "./PostData";
import axios from "axios";

// __mocks__
const postSpy = jest.spyOn(axios, "post");
const spyCslError = jest.spyOn(console, "error");

describe("Testing simple function to send data by post method", () => {
  beforeEach(() => {
    postSpy.mockReset();
  });

  test("Testing when it returns something", () => {
    postSpy.mockImplementationOnce(jest.fn(() => ({})));
    expect(postData()).resolves.toEqual({});
  });

  test("Testing when it throws", () => {
    postSpy.mockImplementationOnce(
      jest.fn(() => {
        throw new Error();
      })
    );
    spyCslError.mockImplementationOnce(jest.fn());
    expect(postData("example")).resolves.not.toBeDefined();
    expect(spyCslError).toHaveBeenCalled();
  });
});
