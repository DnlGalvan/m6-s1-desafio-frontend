import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Loading from "../../components/Loading/loading";

describe("Loading", () => {
	it("Should render correctly - ok", () => {
		render(<Loading />);

		expect(screen.getByRole("spinner")).toBeInTheDocument();
	});
});
