import React, { Component } from 'react';
import axios from 'axios';

// import { Container } from './styles';

export default class SearchPlaylist extends Component {
    state = {
        allSongs: ''
    }

    searchPlay=(playlistName)=>{
        axios.get(`https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/search?name=${playlistName}`,{
            headers:{"auth": "milene-hamilton"}
        }).then((response)=>{
            this.getAllSongsOfPlayList(response.data.result.playlist[0].id);
        }).catch((error)=>{
            alert("deu bosta")
        })  
    }

    getAllSongsOfPlayList=(idOfPlayList)=>{
        console.log(idOfPlayList);
        axios.get(`https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists/${idOfPlayList}/songs`,{
            headers:{"auth": "milene-hamilton"}
        }).then((response)=>{
            alert("cheguei na busca de musicas")
            console.log(response.data.result.musics)
            this.setState({allSongs: response.data.result.musics})
        }).catch((error)=>{
            alert("não retornou a lista de musicas")
        })
    }

    renderAllSongs=()=>{
        const allSongs = this.state.allSongs.map((song)=>{
            return (<div>{song.name}</div>)
        })
        return allSongs;
    }

render() {
    return (
        <div>
                {/* <input type="text" placeholder="Busque artistas,músi..."  /> */}
                { this.state.allSongs && this.renderAllSongs()}
               
        </div>
      );
}
 
}
