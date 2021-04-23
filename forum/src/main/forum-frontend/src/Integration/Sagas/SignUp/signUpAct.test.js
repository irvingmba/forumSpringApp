import signUpAct from "./signUpAct";

describe("Testing async action to sign up", ()=>{
    test("Testing action without parameters",() => {
        expect(signUpAct()).toBeDefined();
    });

    test("Testing action with parameters",() => {
        expect(signUpAct(null)).toBeDefined();
    });
});