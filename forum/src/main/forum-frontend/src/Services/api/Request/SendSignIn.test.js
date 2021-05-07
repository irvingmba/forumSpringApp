import sendSignIn from "./SendSignIn";
import axios from "axios";
import { signInEndpoint } from "../Routes";

// __spies__
const spyPost = jest.spyOn(axios, "post");

describe("Testing function to submit a sign in request", () => {
  test("Testing function without parameters", async () => {
    spyPost.mockImplementationOnce(jest.fn());
    await sendSignIn();
    expect(spyPost).toHaveBeenCalledWith(signInEndpoint, undefined);
  });

  test("Testing function with parameters", async () => {
    spyPost.mockImplementationOnce(jest.fn());
    const payload = { hello: "world" };
    await sendSignIn(payload);
    expect(spyPost).toHaveBeenCalledWith(signInEndpoint, payload);
  });
});
