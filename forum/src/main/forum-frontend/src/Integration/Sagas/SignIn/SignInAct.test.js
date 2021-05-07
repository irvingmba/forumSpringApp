const { default: signInAct, SIGN_IN_ACT } = require("./SignInAct");

describe("Testing async action to sign in", () => {
    test("Testing async action without parameters", () => {
        const action = signInAct();
        expect(action).toBeDefined();
        expect(action).toHaveProperty("type", SIGN_IN_ACT);
    });

    test("Testing async action with parameters", ()=>{
        expect(signInAct(null)).toHaveProperty("payload", null);
    });
});