import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { Button } from "../src";

const ChildNode = () => <span data-testid="button-text">Clique aqui</span>;

describe('Button', () => {
	it("Deve ser capaz de renderizar elementos filhos.", () => {
		render(<Button><ChildNode /></Button>);

		expect(screen.getByRole("button")).toHaveTextContent("Clique aqui");
		expect(screen.getByTestId("button-text")).toBeInTheDocument();
	});

	it("Deve acionar a função onClick apenas uma vez quando clicar no botão.", () => {
		const handleClick = jest.fn();

		render(<Button onClick={handleClick} />);

		userEvent.click(screen.getByRole('button'));

		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});