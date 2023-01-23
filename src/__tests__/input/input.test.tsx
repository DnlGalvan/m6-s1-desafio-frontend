import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Simulation from "../../pages/Simulation/simulation";

const mockedAmount = "15000";
const mockedInstallments = "4";
const mockedMdr = "3";

describe("Input", () => {
	it("Should render correctly - ok", () => {
		render(<Simulation />);

		expect(screen.getByRole("inputAmount")).toBeInTheDocument();
		expect(screen.getByRole("inputInstallments")).toBeInTheDocument();
		expect(screen.getByRole("inputMdr")).toBeInTheDocument();
	});

	it("Should to be able subit the form request correctly - ok", () => {
		render(<Simulation />);

		const inputAmount = screen.getByRole("inputAmount");
		const inputInstallments = screen.getByRole("inputInstallments");
		const inputMdr = screen.getByRole("inputMdr");

		userEvent.type(inputAmount, mockedAmount);
		userEvent.type(inputInstallments, mockedInstallments);
		userEvent.type(inputMdr, mockedMdr);

		userEvent.keyboard("Enter");

		expect(screen.getAllByRole("itemResult")).toHaveLength(4);
	});

	it("Should not to be able subit the form request whithout values - ok", () => {
		render(<Simulation />);

		userEvent.keyboard("Enter");

		expect(screen.getAllByRole("error")).toHaveLength(3);
	});
});
