import axios from 'axios';
import React, { Component } from 'react';

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
      
      
      this.setState ({page: "details"});
      const axiosConfig = {
        headers: {
            Authorization: "lais-silva-mello"
        }
      }
      axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`, axiosConfig)
      .then (response => {
        this.setState({playlistTracks: response.data, playlistId: playlistId})
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

    addTrack = playlistId => {
      const axiosConfig = {
        headers: {
          Authorization: "lais-silva-mello"
        }
      }
      const body = {
          name: this.state.trackName, 
          artist: this.state.trackArtist,
          url: this.state.trackName
      }
      axios
      .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists${playlistId}/tracks`, 
      body, axiosConfig)
      .then (response => {
        console.log(response.data)
      })
      .catch (error => {
        console.log("erro")
      })
    }
    
    
    render () {
        return (
            <div>
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
    }
}

export default Home