
import React from "react";
import { 
  render, 
  fireEvent, 
  wait, 
  getByDisplayValue,
  getByTestId,
  getByText
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import axios from 'axios'

axios.get = jest.fn().mockResolvedValue({data: []})
axios.post = jest.fn().mockResolvedValue()

describe("renderização inicial", () => {
  test("input existe na tela", () => {
    //preparação
    const { getByPlaceholderText } = render(<App />)
    const input = getByPlaceholderText(/create/i)
    //verificação
    expect(input).toBeInTheDocument()
  })

  /*
  test("campos de dias da semana aparecem na tela", () => {
    //preparação
    const { getByText } = render(<App />)
    const monday = getByText(/monday/i)
    const tuesday = getByText(/tuesday/i)
    const wednesday = getByText(/wednesday/i)
    const thursday = getByText(/thursday/i)
    const friday = getByText(/friday/i)
    const saturday = getByText(/saturday/i)
    const sunday = getByText(/sunday/i)
    //verificação
    expect(monday).toBeInTheDocument
    expect(tuesday).toBeInTheDocument
    expect(wednesday).toBeInTheDocument
    expect(thursday).toBeInTheDocument
    expect(friday).toBeInTheDocument
    expect(saturday).toBeInTheDocument
    expect(sunday).toBeInTheDocument
  })

*/

describe("checa funcionalidades", () => {
  test("checa se o input é limpo e se a tarefa aparece na tela depois do click no botao", () => {
    //preparação
    const { getByPlaceholderText, getByTestId } = render(<App />)
    const input = getByPlaceholderText(/create/i)
    const button = getByTestId(/create/i)
    //execução
    fireEvent.change(input, { target: { value: "Comprar" } })
    fireEvent.click(button)
    //verificação
    expect(input).toHaveTextContent("")
    expect(/comprar/i).toBeInTheDocument
  })
})
})

test('Get.axios funcionando', async () => {
  axios.get = jest.fn().mockResolvedValue({
    data: [
      {
        "text": "teste",
        "id": "sYLgZCjyXTwr3G9lqNIP"
      }
    ]
  })

  expect(axios.get).toHaveBeenCalled()
})
describe('Criar uma tarefa', () => {
  test('Cria a tarefa com sucesso', async () => {
    axios.get = jest.fn().mockResolvedValue({
      data: [
        {
          "texto": "tarefa teste",
          "id": "sYLgZCjyXTwr3G9lqNIP"
        }
      ]
    })

    axios.post = jest.fn().mockResolvedValue()

    const {
      getByPlaceholderText,
      getByText,
    } = render(<App />)

    const input = getByPlaceholderText(/create/i)

    await userEvent.type(input, 'tarefa teste')

    expect(input).toHaveValue('tarefa teste')

    const button = getByText(/add/)
    userEvent.click(button)

    expect(axios.post).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-lais', {
      texto: 'tarefa teste'
    })

    await wait(() => expect(axios.get).toHaveBeenCalledTimes(2))
    await wait(() => expect(input).toHaveValue(''))
  })
})