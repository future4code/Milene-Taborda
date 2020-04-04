import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// import { Container } from './styles';

const baseURL = "https://us-central1-future-apis.cloudfunctions.net/spotifour";

export default class DetailsPlaylist extends Component {
    state = {
        allSongs: []
    };

    componentDidMount() {
        this.getAllSongsOfPlayList();
    }
    
    getAllSongsOfPlayList = () => {
        axios.get(`${baseURL}/playlists/${this.props.idPlaylist}/songs`,{
            headers:{ auth: "milene-hamilton" }
        }).then((response)=>{
            console.log(response)
            this.setState({  allSongs: response.data.result.musics })
        }).catch((error)=>{
            alert("Não retornou a lista de musicas")
        })
    }

    render() {
    return(
        <Container>
            <h1>Todas suas músicas</h1>

            {this.state.allSongs.map((song, index) => {
                return (
                    <div key={index}>
                        <Song> {song.artist} - {song.name}</Song>
                    </div>
                )
            })}
        </Container>
    )
        
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 70vw;
`

const Song = styled.p`
 background: #363636;
 border-radius: 10px;
 padding: 10px 12px;
 margin: 5px;
`
