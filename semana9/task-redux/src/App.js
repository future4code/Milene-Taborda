import React from 'react';
import { Container, Title, ContainerButtons } from './Styles';

import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import ToolBar from './components/ToolBar';


export default function App() {
  return (
    <Container>
      
      <Title>4Task</Title>

      <ContainerButtons>
     
        <TaskForm />
        <TaskList />
        <ToolBar />

      </ContainerButtons>
      
    </Container>
  );
}





