import React, { Component } from 'react';
import styled from 'styled-components';

import GeneralData from './components/GeneralData/GeneralData' ;
import InfoEducacional from './components/InfoEducational/InfoEducational'
import InfoGeneralEducational from './components/InfoGeneralEducational/InfoGeneralEducational';
import MessageForm from './components/MessageForms/MessageForm'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      etapa: 0,
    }
  }


  somaClicks = () => {
    const proximaEtapa= this.state.etapa + 1
    this.setState({
      etapa: proximaEtapa
    })
  }

  render() {
  let etapajsx = null

    switch (this.state.etapa) {
      case 0:
        etapajsx = (
          <GeneralData />
        )
      break;
      case 1:
        etapajsx = (
        <InfoEducacional 
      />)
      break;
      case 2:
        etapajsx = (
          <InfoGeneralEducational />
        )
      break;

      default:
    }

    return(
      <Container>
        {etapajsx}
  
       { this.state.etapa < 3 ? <Button onClick={this.somaClicks}>Próxima etapa</Button> : <MessageForm /> }
      </Container>
    )
  }
}

const Container = styled.div `
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
width: 400px;
height: 500px;
margin: 10px auto;
`
const Button = styled.button `
margin-top: 10px;
`

export default App;
