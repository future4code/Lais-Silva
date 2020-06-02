import React , { Component } from 'react'

class Input extends Component {
    render () {
        return (
    
        <div>
            <p>Nome:</p>
            <input 
            value={this.props.nomeDigitado}
            onChange={this.props.mudaNome}
            />
            <p>E-mail:</p>
            <input 
            value={this.props.emailDigitado}
            onChange={this.props.mudaEmail}
            />
            <button onClick={this.props.criaCadastro}>Cadastrar</button>
        </div>
        )
    }
} 

export default Input;