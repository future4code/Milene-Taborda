import React, { Component } from 'react';
import './App.css';
import CreateUsers from './components/CreateUsers';
import ListUsers from './components/ListUsers'


class App extends Component {
state = {
  
  tela: 'inicial'
}

onClickInicial = () => {
  this.setState({ tela: "inicial" });
};

onClickLista = () => {
  this.setState({ tela: "lista" });
};

  render() {
    let tela;
    switch (this.state.tela) {
      case "inicial":
        tela = (<CreateUsers onClickLista={this.onClickLista} />);
        break;
      case "lista":
        tela = ( <ListUsers onClickLogin={this.onClickInicial} /> );
        break;
        default:
    }

    return (
      <div className="App">
        {tela}
      </div>
    );
  }
}

export default App;
