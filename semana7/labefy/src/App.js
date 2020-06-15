import axios from 'axios';
import React, { Component } from 'react';

import './App.css'

class Home extends React.Component {
    
    state = {
        playlistName: "",
        userPlaylists: [],
        page: "home",
        playlistId: "",
        playlistTracks: [],
        trackName: "",
        trackArtist: "", 
        trackLink: ""
    }

    componentDidMount = () => {
        this.fetchPlaylist ();
    }
    
    newPlaylistName = event => {
        const newPlaylistName = event.target.value
        this.setState({playlistName: newPlaylistName})
    }

    createPlaylist = () => {
        const axiosConfig = {
            headers: {
                Authorization: "lais-silva-mello"
            }
        };
        
        const body = {
            name: this.state.playlistName
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body, axiosConfig)
        .then (() => {
            alert("Playlist criada com sucesso!");
            this.setState ({playlistName: ""});
            this.fetchPlaylist();
        })
        .catch( error => {
            alert("Erro. Confira se você não tem uma playlist com esse mesmo nome.");
            this.setState ({playlistName: ""})
        })
    }

    fetchPlaylist = () => {
        const axiosConfig = {
            headers: {
                Authorization: "lais-silva-mello"
            }
        }
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", axiosConfig)
        .then(response => {
            this.setState({userPlaylists: response.data.result.list});
        })
        .catch (error => {
            alert("Erro ao buscar playlists.")
        })
    }

    playlistDetails = playlistId => {
      const newPlaylistID = playlistId
      this.setState ({page: "details", playlistId: newPlaylistID});
      const axiosConfig = {
        headers: {
            Authorization: "lais-silva-mello"
        }
      }
      axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`, axiosConfig)
      .then (response => {
        this.setState({playlistTracks: response.data.result.tracks})
        console.log(response.data)
      })
      .catch(error => {
        alert("Erro ao buscar musicas")
      })
    }

    backToHome = () => {
      this.setState ({page: "home"})
    }

    handleTrackName = event => { 
      this.setState ({trackName: event.target.value})
    }

    handleTrackArtist = event => {
      this.setState ({trackArtist: event.target.value})
    }

    handleTrackLink = event => {
      this.setState ({trackLink: event.target.value})
    }

    addTrack = (playlistId) => {
      const axiosConfig = {
        headers: {
          Authorization: "lais-silva-mello"
        }
      }
      const body = {
          name: this.state.trackName, 
          artist: this.state.trackArtist,
          url: this.state.trackLink
      }
      axios
      .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`, 
      body, axiosConfig)
      .then (response => {
        alert("Musica adicionada!")
      })
      .catch (error => {
        console.log("Erro :(")
      })
    }
    
    render () {
      if (this.state.page === "home") {
        return (
            <div className="pageHome grid-template-areas-1">
                <div className="newPlaylistForm">
                    <h3>Criar playlist</h3>
                    <input value={this.state.playlistName} placeholder="Nome da playlist" onChange={this.newPlaylistName}/>
                    <button onClick={this.createPlaylist}>Criar playlist</button>
                </div>

                <div className="userPlaylists">
                  {this.state.userPlaylists.map(playlist => {
                      return <p onClick={() => this.playlistDetails(playlist.id)}>{playlist.name}</p>
                  })}
                </div>
            </div>
        )
      } else {
          return (
            <div>

              <h3>Detalhes de playlist</h3>
              <h4>Adicionar musicas:</h4>
              <form className="form"> 
                <input onChange={this.handleTrackName} placeholder="Nome da musica"/>
                <input onChange={this.handleTrackArtist} placeholder="Artista"/>
                <input onChange={this.handleTrackLink} placeholder="Link"/>
                <p onClick={() => {this.addTrack(this.state.playlistId)}}>Adicionar musica</p>
              </form>  
              <h4>Musicas</h4>
              <div>
                {this.state.playlistTracks.length ? this.state.playlistTracks.map(track => {
                  return <div>
                    <p>{track.name}</p>
                    <p>{track.artist}</p>
                    </div> }) : <p>Sem musicas ainda</p>}
              </div>            
              <button onClick={this.backToHome}>Voltar</button>
              
            </div>
          )
      }
        
    }
}

export default Home