import React from 'react';
import { Container, Title, ContainerButtons, Filter, List, Footer } from './Styles';
import Button from '@material-ui/core/Button';

import CreateTask from './components/CreateTask';


export default function App() {
  return (
    <Container>
      
      <Title>4Task</Title>

      <ContainerButtons>
        <CreateTask />

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





