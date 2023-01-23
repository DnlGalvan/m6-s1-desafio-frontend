import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ResultError from "../../components/ResultError/resultError";

describe("ResultError", () => {
	it("Should render correctly if error Timout - ok", () => {
		render(
			<ResultError menssage="Sua requisição está demorando para retornar. Tente novamente!" />
		);

		expect(screen.getByRole("resultError")).toBeInTheDocument();
	});

	it("Should render corretly if error Internal Error - ok", () => {
		render(
			<ResultError menssage="Houve um problema interno com sua requisição. Tente novamente!" />
		);

		expect(screen.getByRole("resultError")).toBeInTheDocument();
	});
});
