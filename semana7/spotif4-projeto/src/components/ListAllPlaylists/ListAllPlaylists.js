import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// import { Container } from './styles';

const baseURL = "https://us-central1-future-apis.cloudfunctions.net/spotifour";

export default class ListAllPlaylists extends Component {
    state = {
        list: [],
    };

    componentDidMount() {
        this.ListAllPlaylists();
    }  

    ListAllPlaylists = () => {
        axios.get(`${baseURL}/playlists` , {
            headers: {
                auth: "milene-hamilton"
              }
        }).then(response => {
            console.log(response)
            this.setState({ list: response.data.result.list })
        })
        console.log(this.state.list)
    }
    
    deletePlaylist = (id) => {
        axios.delete(`${baseURL}/playlists/${id}` , 
        {
            headers : {
                'auth': 'milene-hamilton'
            }, 
       }
    ).then(() => {
        alert("Tem certeza que deseja deletar a Playlist?");
       this.ListAllPlaylists();
    }).catch(() => {
        alert('Erro')
    });
}

    render() {
        return (
        <>
        <h1>Suas Playlists</h1>
            <DivPlaylist>
                {this.state.list.map((playlist, index) => {
                    return (
                        <>
                        <ContainerPl>
                        <Img src={'https://i.pinimg.com/originals/f1/92/ec/f192ecd182b0c57ec8a4a97828430238.png'} />
                            <p key={index}>{playlist.name}</p>
                                <ContainerButtons>
                                    < ButtonDelete onClick={() => 
                                        {if(window.confirm("Deseja realmente deletar o usuário?")) 
                                        this.deletePlaylist(playlist.id)}}> Deletar
                                    </ ButtonDelete>
                                    <ButtonDetails onClick={() => this.props.onClickSearchDetails(playlist.id)}>Detalhes</ButtonDetails>
                                </ContainerButtons>
                        </ContainerPl >
                </>
                    )
                })}
            </DivPlaylist>
        </>
          );
    }
}

const DivPlaylist = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 250px);
    grid-template-rows: 270px;
`

const ContainerPl = styled.div`
    background: #1C1C1C;
    text-align: center;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 7px;
`
const ContainerButtons = styled.div``

const Img = styled.img`
      height: 150px;
      width: 100%;
`
const ButtonDelete = styled.button`
    width: 100px;
    margin: 0 7px;
    border: none;
    height: 30px;
    border-radius: 7px;
    background: #363636;
`
const ButtonDetails = styled.button`
    width: 100px;
    margin: 0 7px;
    border: none;
    height: 30px;
    border-radius: 7px;
    background: #FF7F00;
    opacity: 0.4;
`
