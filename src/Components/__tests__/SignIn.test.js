import { render, screen } from "@testing-library/react"
import SignIn from "../SignIn"
import "@testing-library/jest-dom"

test("renders SignIn component", () => {
    render(<SignIn />)

    const heading = screen.getByRole('heading', { level: 1 },{ level: 3 });
    expect(heading).toBeInTheDocument()
})
