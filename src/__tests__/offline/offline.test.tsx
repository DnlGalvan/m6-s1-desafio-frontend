import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Offline from "../../components/Offline/offline";

describe("Offline", () => {
	it("Should render correctly if user is offline - ok", () => {
		render(<Offline />);

		expect(screen.getByRole("title")).toBeInTheDocument();
		expect(screen.getByRole("image")).toBeInTheDocument();
	});
});
