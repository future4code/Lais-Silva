import React , { Component } from 'react'
import axios from 'axios'

class Cadastro extends Component {
  
    state = {
        nomeDigitado: "",
        emailDigitado: "",
      };

    criaCadastro = () => {
        const body = {
        name: this.state.nomeDigitado,
        email: this.state.emailDigitado
        };

        axios
        .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body, 
        {
            headers: {
            Authorization: "lais-silva-mello"
            }
        }
        )
        .then(response => {
        window.alert("Dados enviados com sucesso!")
        this.setState({ nomeDigitado: "" });
        this.setState({ emailDigitado: "" }); 
        })
        .catch(err => {
        alert( "Ocorreu um erro :(" )
        });
    }  
  
    mudaNome = event => {
    this.setState ({ nomeDigitado: event.target.value })
    }

    mudaEmail = event => {
    this.setState ({ emailDigitado: event.target.value })
    }
    
    
    render () {
        return (
    
        <div>
            <p>Nome:</p>
            <input 
            value={this.state.nomeDigitado}
            onChange={this.mudaNome}
            />
            <p>E-mail:</p>
            <input 
            value={this.state.emailDigitado}
            onChange={this.mudaEmail}
            />
            <button onClick={this.criaCadastro}>Cadastrar</button>
        </div>
        )
    }
} 

export default Cadastro;