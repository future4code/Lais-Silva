import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";


test("checa criação, deleção e função de curtir posts", () => {
    //preparação - criar post
    const { getByTestId, getByText, getByPlaceholderText } = render(<App />)
    let input = getByPlaceholderText("Novo post")
    let botaoCriarPost = getByText("Adicionar")

    //execução - criar post
    fireEvent.change(input, { target: { value: "123" } })
    fireEvent.click(botaoCriarPost)

    //verificação - criar post
    let post = getByTestId(/post-content/i)
    expect(post).toHaveTextContent("123");

    //preparação - botão curtir
    const botaoCurtir = getByTestId(/like-button/i);

    //execução - botão curtir   
    fireEvent.click(botaoCurtir);

    //verificação - botão curtir 
    expect(botaoCurtir).toHaveTextContent(/descurtir/i);

    //preparação - botão apagar
    const botaoApagar = getByText(/apagar/i);

    //execução - botão apagar
    fireEvent.click(botaoApagar)

    //verificação - botão apagar
    wait(() => {
        expect(post).toBeNull()
    })
})

test("teste de funcionalidade de limpeza do input", () => {
    //preparação
    const { getByTestId, getByText, getByPlaceholderText } = render(<App />)
    let input = getByPlaceholderText("Novo post")
    let botao = getByText("Adicionar")

    //execução
    fireEvent.change(input, { target: { value: "123" } })
    fireEvent.click(botao)

    //verificação
    expect(input).toHaveTextContent("")
})
test("teste de funcionalidade que mostra a frase > nenhum post", async () => {
    const { queryByText } = render(<App />);
    await wait(() => {
        expect(queryByText(/Nenhum post/i)).toBeInTheDocument();
    });
});
test("teste de funcionalidade que mostra numeros de posts", () => {
    //preparação - criar post & numero de posts
    const { getByTestId, getByText, getByPlaceholderText } = render(<App />)
    let input = getByPlaceholderText("Novo post")
    let botaoCriarPost = getByText("Adicionar")
    
    //execução - criar post 
    fireEvent.change(input, { target: { value: "123" }})
    fireEvent.click(botaoCriarPost)

    //verificação - criar post
    let post = getByTestId(/post-content/i)
    expect(post).toHaveTextContent("123");

    //verificação - numero de posts
    let contadorPosts = getByText(/numero/i);
    expect(contadorPosts).toHaveTextContent("posts: 1");
})
test("teste de funcionalidade que proibe posts vazios", () => {
    //preparação
    const { getByTestId, getByText, getByPlaceholderText } = render(<App />)
    let input = getByPlaceholderText("Novo post")
    let botao = getByText("Adicionar")

    //execução
    fireEvent.change(input, { target: { value: "" } })
    fireEvent.click(botao)

    //verificação
    wait(() => {
        expect(queryByText(/vazio/i)).toBeInTheDocument();
    });
});