
import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("checa se o input é limpo depois de criar tarefa", () => {
  //preparação
  const { getByPlaceholderText, getByTestId } = render(<App />)
  const input = getByPlaceholderText(/create/i)
  const button = getByTestId("123")
  //execução
  fireEvent.change(input, { target: { value: "Comprar" } })
  fireEvent.click(button)
  //verificação
  expect(input).toHaveTextContent("")
})
