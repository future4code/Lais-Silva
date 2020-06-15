import React, { Component } from 'react'
import axios from 'axios';
import './paginaLista.css';


class Lista extends React.Component {
    
    
    state = {
        cadastrados: [],
        id: 0
    }
    
    componentDidMount () {
        this.mostraCadastro();
    }

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
    
    confirmaExclusao = userId => {
        const r = window.confirm("Quer mesmo apagar?");
        if (r === true) {
            this.deletaUsuario (userId);
        } else {
            alert("Voce cancelou.");
        }  
    }

    deletaUsuario = userId => {
        axios
        .delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
            {
                headers: {
                    Authorization: "lais-silva-mello"
                }
            }
        )
        .then(() => {
            alert("Usuario apagado com sucesso");
            this.mostraCadastro ()
        })
        .catch(e => {
            alert("Ocorrreu um erro ao apagar")
        })
    
    }    

    botaoAlteraLista = () => {
        if (this.state.mostraEmail === "false") {
          this.setState ({ mostraEmail: "true"})
        } else { 
          this.setState ({ mostraEmail: "false"})}
    }

    pegaId = userId => {
      axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
      {
        headers: {
          Authorization: "lais-silva-mello"
        }
      }
      )
      .then((response) => {
        console.log(response)
      })
    }

    render () {
      return (  
        <ul>{this.state.cadastrados.length === 0 && <div>Carregando...</div>}
        <div>
          {this.state.cadastrados.map(cadastros => {
            return (
              
              <li key={cadastros.id}>
                {cadastros.name}
                <span onClick={() => this.confirmaExclusao(cadastros.id)}> X </span>
              </li>
            )
          })}
      </div>
      </ul>

      )    
    }
}
  
  
export default Lista;
  