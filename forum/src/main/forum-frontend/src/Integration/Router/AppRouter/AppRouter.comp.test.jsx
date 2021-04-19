import { render } from "@testing-library/react";
import AppRouter from "./AppRouter.comp";

describe("Testing general routing of the application", ()=>{
    test("Rendering application with router", ()=>{
        render(<AppRouter />);
    });
});