import React, {Component} from 'react';
import styled from 'styled-components';


import CreatePlaylist from './components/CreatePlaylist/CreatePlaylist';
import ListAllPlaylists from './components/ListAllPlaylists/ListAllPlaylists';
import DetailsPlaylist from './components/DetailsPlaylist'


export default class App extends Component {
  state = {
    teste: 'inicial',
    idPlaylist: ''
  }

  onClickInicial = () => {
    this.setState({ teste: "inicial" });
  };
  
  onClickCreatePlaylist = () => {
    this.setState({ teste: "create-playlist" });
  };
  
  onClickListAllPlaylist = () => {
    this.setState({ teste: "list-playlist" });
  };

  onClickSearchPlaylist = () => {
    this.setState({ teste: "search-playlist" });
  };

  onClickSearchDetails = (id) => {
    this.setState({ teste: "details", idPlaylist: id });
    console.log(this.state.idPlaylist)
  };

  render() {
    let tela

    switch(this.state.teste) {
      case 'create-playlist': 
        tela = ( <CreatePlaylist  /> )
      break;
      case 'list-playlist': 
      tela = ( <ListAllPlaylists onClickSearchDetails={this.onClickSearchDetails } playListDetails={this.playListDetails}  /> )
      break;
      case 'search-playlist': 
      tela = ( <></> )
      break;
      case "details":
            tela = ( <DetailsPlaylist idPlaylist={this.state.idPlaylist}  /> )
            break;
      default:
    }


    return (
      <Container>

      <ConatinerNavbar>
        <ContainerNavBar>
          <ItemNavBar >Inicio</ItemNavBar >
  
          <ItemNavBar  onClick={this.onClickCreatePlaylist} >Criar Playlist</ItemNavBar > 
  
          <ItemNavBar  onClick={this.onClickListAllPlaylist}>Sua biblioteca</ItemNavBar >

        </ContainerNavBar>
      </ConatinerNavbar>

        <div>
        {tela}        
        </div>

      </Container>
    );
  }
}


const Container = styled.div`
  background: #131313;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 3fr;
  color: #eee;
`

const ContainerNavBar = styled.ul`
  list-style-type: none;
  margin-top: 55px;
`
const ItemNavBar = styled.li`
  margin: 25px 0;
  cursor: pointer;
`

const ConatinerNavbar = styled.div`
  height: 100vh;
  width: 20vw;
  background: black;
 
`
