import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

// import { Container } from './styles';

const baseURL = "https://us-central1-future-apis.cloudfunctions.net/spotifour";

export default class DetailsPlaylist extends Component {
    state = {
        allSongs: [],
        buttonToAdd: false,
        inputValueName: '',
        inputValueArtist: '',
        inputValueURL: ''
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

    addSongToPlaylist = (id) => {
        const body = {
            name: this.state.inputValueName, 
            artist: this.state.inputValueArtist,
            url: this.state.inputValueURL
        }

        axios.post(`${baseURL}/playlists/${id}/songs` , body, {

            headers: {
                auth: "milene-hamilton"
            }

        }).then(response => {
            this.setState({ buttonToAdd: false })
            this.getAllSongsOfPlayList();
        }).catch(() => {
            alert("Errrrou!")
        })
    }  

    deleteSongToPlaylist = (idSong) => {
        axios.delete(`${baseURL}/playlists/${this.props.idPlaylist}/songs/${idSong}` , 
        {
            headers : {
                'auth': 'milene-hamilton'
            }, 
       }
    ).then(() => {
        alert('Tem certeza que deseja apagar a música?')
        this.getAllSongsOfPlayList();
    }).catch(() => {
        alert('Erro')
    });
}

    
    onClickButton = () => {
        this.setState({ buttonToAdd: !this.state.buttonToAdd })           
    }

    onChangeInputName = (e) => {
        this.setState({ inputValueName: e.target.value })
    }

    onChangeInputArtist = (e) => {
        this.setState({ inputValueArtist: e.target.value })
    }

    onChangeInputURL = (e) => {
        this.setState({ inputValueURL: e.target.value })
    }
    
    render() {
      return(
        <Container>
            <Header>
            <h1>Todas suas músicas</h1> <Icon onClick={this.onClickButton}>  <Span><i class="fas fa-plus"></i></Span> Adicionar Música</Icon>
            </Header>

            {this.state.buttonToAdd && (
              <ContainerAddSong>
                        
                    <Input type="text" placeholder="Nome da musica" onChange={this.onChangeInputName} value={this.state.inputValueName}/>
                    <Input type="text" placeholder="Artista" onChange={this.onChangeInputArtist} value={this.state.inputValueArtist}/>
                    <Input type="text" placeholder="Url da musica" onChange={this.onChangeInputURL} value={this.state.inputValueURL}/>
                    <Button onClick={() => this.addSongToPlaylist(this.props.idPlaylist)}>Adicionar</Button>
   
              </ContainerAddSong>
            )}      

            {this.state.allSongs.map((song, index) => {
                return (
                    <div key={index}>
                        <Song> {song.artist} - {song.name} <i class="fas fa-trash" onClick={() => this.deleteSongToPlaylist(song.id)}></i></Song> 
                    </div>
                )
             })}

        </Container>
    )
        
    }
}

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`

const Input = styled.input`
margin: 5px;
padding: 3px;
border-radius: 5px;
`

const Icon = styled.div`
    margin: 30px 0px;
    width: 150px;
    display: flex;
    justify-content: space-between;
`

const ContainerAddSong = styled.div`
    margin: 0 auto;
    background: #363636;
    padding: 15px ;
    border-radius: 15px;
    margin-bottom: 10px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 70vw;
`

const Song = styled.p`
 background: #363636;
 border-radius: 10px;
 padding: 10px 25px 10px 12px;
 margin: 5px;
 display: flex;
 justify-content: space-between;
`

const Span = styled.span`
margin: 0.5px;
`

const Button = styled.button`
 padding: 8px 15px;
 border-radius: 10px;
 border: none;
 background: grey;
 margin-top: 15px;
`
