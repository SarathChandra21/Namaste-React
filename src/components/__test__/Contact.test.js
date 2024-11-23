import { screen, render } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Contact Page test cases",()=>{
    it("Should load Contact us component",()=>{
        render(<Contact/>);

        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument();
    });

    it("Should load button inside Contact us", ()=>{
        render(<Contact/>);

        const button = screen.getByRole("button");

        expect(button).toBeInTheDocument();
    });

    it("Should load input name inside Contact component", () => {
        render(<Contact />);
        const inputName = screen.getByPlaceholderText("name");
        // Assertion
        expect(inputName).toBeInTheDocument();
    });

    it("Should load 2 input boxes on the Contact component", () => {
        render(<Contact />);
        
        const inputBoxes = screen.getAllByRole("textbox");
        
        expect(inputBoxes.length).toBe(2);
    });
})