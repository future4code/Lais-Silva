import './App.css';
import React from 'react';
import axios from 'axios';

import Cadastro from './components/paginaCadastro';
import Lista from './components/paginaLista'


class App extends React.Component {

  state = {
    pagina: "cadastro"
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


  botaoAlteraLista = () => {
    if (this.state.pagina === "cadastro") {
      this.setState ({ pagina: "lista"})
    } else { 
      this.setState ({ pagina: "cadastro"})}
  }

  render () {

    return (
     
      <div>
        <div className="button">
          <button onClick={this.botaoAlteraLista}>Mudar de pagina</button>
        </div>  

      {this.state.pagina === "cadastro" ?
        (<div className="form">
            <Cadastro />
        </div>) : 
        (<div>
            <Lista />
        </div>)}

      </div>
    );
  }
}

export default App;

