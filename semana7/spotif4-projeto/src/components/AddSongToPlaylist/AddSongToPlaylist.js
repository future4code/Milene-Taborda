import React, { Component } from 'react';
import axios from 'axios';

// import { Container } from './styles';

const baseURL = "https://us-central1-future-apis.cloudfunctions.net/spotifour/";

export default class addSongToPlaylist extends Component {
    state = {
        inputValueName: '',
        inputValueArtist: '',
        inputValueURL: ''
    };

    addSongToPlaylist = (id) => {
        const body = {
            name: this.state.inputValueName, 
            artist: this.state.inputValueArtist,
            url: this.state.inputValueURL
        }

        axios.post(`${baseURL}/playlists/${id}` , body, {

            headers: {
                auth: "milene-hamilton"
            }

        }).then(response => {
            
        })
    }
    
    

    render() {
        return (
            <div>
                <input type="text" placeholder="Nome da musica"/>
                <input type="text" placeholder="Artista"/>
                <input type="text" placeholder="Url da musica"/>
                <button>Adicionar</button>
            </div>
          );
    }
}
