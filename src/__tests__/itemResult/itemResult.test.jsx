import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ItemResult from "../../components/ItemResult/itemResult";

describe("ItemResult", () => {
	it("Should render correctly - ok", () => {
		render(<ItemResult />);

		expect(screen.getByRole("itemResult")).toBeInTheDocument();
	});
});
