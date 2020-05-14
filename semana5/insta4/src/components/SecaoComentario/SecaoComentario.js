import React, {Component} from 'react'
import './SecaoComentario.css'

export class SecaoComentario extends Component {
	state = {
		textoComentario: ''
	}

	onChangeComentario = event => {
		const comentario = event.target.value
		this.setState ({
			textoComentario: comentario
		})
		console.log(this.state.textoComentario)
	}

	render() {
		return <div className={'comment-container'}>
			<input
				className={'input-comentario'}
				placeholder={'Comentário'}
				value={this.state.textoComentario}
				onChange={this.onChangeComentario}
			/>
			<button onClick={this.props.aoEnviar}>Enviar</button>
		</div>
	}
}
