import React, { Component } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { addTask } from '../actions/actions'

export default class CreateTask extends Component {
    state = {
        tasks: [],
        inputTaskValue: ''
    }

   onChangeTask = event => {
       this.setState({ inputTaskValue: event.target.value })
   } 

   onClickAdd = () => {
        const newTask = {
           id: Date.now(),
           task: this.state.inputTaskValue,
           complete: false
        }

       const copieNewTask = [...this.state.tasks, newTask]

       this.setState({ tasks: copieNewTask, inputTaskValue: ''})
   }

  render() {
    return (
        <>
          <Input onChange={this.onChangeTask} value={this.state.inputTaskValue} type="text" placeholder="O que tem que ser feito?"/> 
          <button onClick={this.onClickAdd}>Adicionar</button>

          {this.state.tasks.map(task => {
              return <p>{task.task}</p>
          })}
        </>
    );
  }
}

const Input = styled.input`
  padding: 16px 16px 16px 16px;
  border: none;
  width: 40vw;
  outline: none;
`

