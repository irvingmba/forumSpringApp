import fireEvent from "@testing-library/user-event";
import {cleanup, render, screen} from "@testing-library/react";
import UsernameField from ".";

describe("Testing text box for non empty values", ()=>{
    afterEach(cleanup);

    test("Rendering text box", ()=>{
        render(<UsernameField />);
        expect(screen.getByRole("textbox")).toBeDefined();
    });

    test("When you focus on the input and then blur, it will ask you data", ()=>{
        render(<UsernameField />);
        const input = screen.getByRole("textbox");
        expect(input).not.toHaveProperty("error");
        expect(input).not.toHaveProperty("helperText");
        fireEvent.click(input);
        fireEvent.tab();
        expect(input).toHaveProperty("error", true);
        expect(input).toHaveProperty("helperText", "You must input something");
    });
});