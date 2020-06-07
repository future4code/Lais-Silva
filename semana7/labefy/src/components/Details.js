import React, { Component } from 'react'
import axios from 'axios'

class Details extends React.Component {
    render () {
        return (
            <div>

            <h3>Nome da Playlist</h3>
            <h4>Adicionar musicas:</h4>
            <form> 
              <input onChange={this.handleTrackName} placeholder="Nome da musica"/>
              <input onChange={this.handleTrackArtist} placeholder="Artista"/>
              <input onChange={this.handleTrackLink} placeholder="Link"/>
              <button onClick={() => {this.addTrack(this.state.playlistId)}}>Adicionar musica</button>
            </form>  
            <h4>Musicas</h4>
                        
            <button onClick={this.backToHome}>Voltar</button>

          </div>
        )
    }
}

export default Details