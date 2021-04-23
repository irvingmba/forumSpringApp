import { sendSignUp } from ".";
import axios from "axios";

// __spies__
const spySendPost = jest.spyOn(axios, "post");

describe("Testing function to send sign up form to server", () => {
  beforeEach(() => {
    spySendPost.mockReset();
  });

  test("Testing function without parameters, will return something", async () => {
    await sendSignUp();
    expect(spySendPost).toHaveBeenCalled();
  });

  test("Testing with any data will return something", async () => {
    spySendPost.mockImplementationOnce(jest.fn());
    await sendSignUp(null);
    expect(spySendPost).toHaveBeenCalled();
  });
});
