import React, {Component} from 'react';
import styled from 'styled-components';


import CreatePlaylist from './components/CreatePlaylist/CreatePlaylist';
import ListAllPlaylists from './components/ListAllPlaylists/ListAllPlaylists';
import DetailsPlaylist from './components/DetailsPlaylist/DetailsPlaylist';


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

      <Span><i class="fas fa-user-astronaut"> </i> SPOTIF4 - HAMILTON</Span>

        <ContainerNavBar>
          <ItemNavBar ><i class="fas fa-home"></i> Inicio</ItemNavBar >
          <ItemNavBar  onClick={this.onClickListAllPlaylist}> <i class="fas fa-book-open"></i> Sua biblioteca</ItemNavBar >
        </ContainerNavBar>
         
          <AddPlaylist onClick={this.onClickCreatePlaylist}> <i class="fas fa-plus"></i> Criar Playlist</AddPlaylist> 
      
      </ConatinerNavbar>

        <div>
        {tela}        
        </div>

      </Container>
    );
  }
}
const AddPlaylist = styled.div`
  background: #363636;
  margin-top: 25px;
  padding: 15px 35px;
  cursor: pointer;
`

const Container = styled.div`
  background: #131313;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 3fr;
  color: #eee;
`

const ContainerNavBar = styled.ul`
  list-style-type: none;
  border-top: 1px solid #363636;
`
const ItemNavBar = styled.li`
  margin: 30px 0;
  cursor: pointer;
`


const ConatinerNavbar = styled.div`
  height: 100vh;
  width: 20vw;
  background: black;
 
`
const Span = styled.div`
  font-size: 25px;
  padding: 25px 10px;
`
