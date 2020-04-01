import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import CreateUsers from './components/CreateUsers';
import ListUsers from './components/ListUsers';
import DetailsUser from './components/DetailsUser'

class App extends Component {
state = {
  tela: 'inicial', 
}

onClickInicial = () => {
  this.setState({ tela: "inicial" });
};

onClickLista = () => {
  this.setState({ tela: "lista" });
};

onClickDetails = () => {
  this.setState({ tela: "detalhes" });
};

  render() {
    let tela;
    switch (this.state.tela) {
      case "inicial":
        tela = (<CreateUsers onClickLista={this.onClickLista} />);
        break;
      case "lista":
        tela = ( <ListUsers onClickLogin={this.onClickInicial} onClickDetails={this.onClickDetails}  /> );
        break;
        case "detalhes":
          tela = ( <DetailsUser onClickLista={this.onClickLista}  /> );
          break;
        default:
    }

    return (
      <Container>
        {tela}
      </Container>
    );
  }
}

const Container = styled.div``

export default App;
