import React from 'react';
import { Container, Title, ContainerButtons, Input, Filter, List, Footer } from './Styles'
import Button from '@material-ui/core/Button';

export default function App() {
  return (
    <Container>
      
      <Title>4Task</Title>

      <ContainerButtons>
      <Input type="text" placeholder="O que tem que ser feito?"/> 


      <Footer>
        <Button>Marcar todas como completas</Button>

        <Filter>
        <List><Button variant='contained'>Todas</Button ></List>
        <List><Button >Pendentes</Button></List>
        <List><Button>Completas</Button></List>
        </Filter>
      </Footer>
      </ContainerButtons>
      
    </Container>
  );
}



