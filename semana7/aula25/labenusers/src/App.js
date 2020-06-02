import './App.css';
import React from 'react';
import axios from 'axios';

import Input from './components/input';


class App extends React.Component {

  state = {
    cadastrados: [],
    nomeDigitado: "",
    emailDigitado: "",
    verLista: false
  };

  componentDidMount = () => {
    this.mostraCadastro();
  };
  
  mostraCadastro = () => {
    axios
    .get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers: {
          Authorization: "lais-silva-mello"
        }
      }
    )
    .then(resposta => {
      this.setState({ cadastrados: resposta.data })
    })
    .catch(erro => {
      console.log(erro);
    });
  } 
  
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
      this.mostraCadastro();
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

  botaoAlteraLista = () => {
    this.setState({verLista: !this.state.verLista})
  }

  render () {

    return (
      <div>
        <div className="button">
          <button onClick={this.botaoAlteraLista}>Ir para a pagina de lista</button>
        </div>  
      
        <div className="form">
        <Input
        value={this.state.nomeDigitado}
        onChange={this.mudaNome}
        valueEmail={this.state.emailDigitado}
        onChangeEmail={this.mudaEmail}
        onClick={this.criaCadastro}
        />
        </div>

        <div>
          
          {this.state.cadastrados.map(cadastros => {
            return <p key={cadastros.id}>{cadastros.name}</p>
            })
          }
            </div>

      </div>
    );
  }
}

export default App;

