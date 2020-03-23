import React, { Component } from 'react';
import styled from 'styled-components';

export default class InfoEducational extends Component {

render() {
    return (
        <Container>
              <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
            <label>1. Qual curso?</label>
            <input />
    
            <label>2. Qual a unidade de ensino?</label>
            <input />
        </Container>
      );
}
}

const Container = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
