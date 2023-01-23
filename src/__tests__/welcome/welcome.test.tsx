import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Welcome from "../../components/Welcome/welcome";

describe("Welome", () => {
	it("Should render correctly - ok", () => {
		render(
			<BrowserRouter>
				<Welcome />
			</BrowserRouter>
		);

		expect(screen.getByRole("title")).toBeInTheDocument();
		expect(screen.getByRole("description")).toBeInTheDocument();
		expect(screen.getByRole("button")).toBeInTheDocument();
	});

	it("Should navigate to /simulation page when hits the button - ok", () => {
		render(
			<BrowserRouter>
				<Welcome />
			</BrowserRouter>
		);
		const btnSimulation = screen.getByRole("button");

		userEvent.click(btnSimulation);

		expect(global.window.location.pathname).toContain("/simulation");
	});
});
