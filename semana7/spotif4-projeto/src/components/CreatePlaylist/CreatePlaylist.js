import React, { Component } from 'react';
import axios from 'axios';

import styled from 'styled-components';

const baseURL = "https://us-central1-future-apis.cloudfunctions.net/spotifour";

export default class CreatePlaylist extends Component {
    state = {
        InputValueNewPlaylist: "",      
    };  
    
    createNewPlaylist = () => {
        const body = {
            name: this.state.InputValueNewPlaylist,
        }

        axios.post(`${baseURL}/playlists`, body, {
            headers: {
              auth: "milene-hamilton"
            }
        }).then(() => {
            window.alert('Playlist criada com sucesso!')
        }).catch((err) => {
            alert("Playlist já existente!")
        });
    }

    onChangeNewPlaylist = (e) => {
        this.setState({ InputValueNewPlaylist: e.target.value });
    }

    render() {
        return (
            <Container>
                <H1>Criar nova Playlist</H1>
                <Input type="text" placeholder="Nome da Playlist ..." value={this.state.InputValueNewPlaylist} onChange={this.onChangeNewPlaylist}/> <br/>
                <Button onClick={this.createNewPlaylist}>Criar</Button>
            </Container>
          );
    }
}

const Container = styled.div`
    width: 50vw;
    height: 50vh;
    border: 1px solid #eee;
    border-radius: 5px;
    margin: 20vh auto;
    text-align: center;
`
const Input = styled.input`
    width: 30vw;
    padding: 5px 0;
`
const Button = styled.button`
 padding: 10px 15px;
 border-radius: 10px;
 border: none;
 background: grey;
 margin-top: 15px;
`
const H1 = styled.h1`
margin-bottom: 90px;
`
