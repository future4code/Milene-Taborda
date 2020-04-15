import React, { Component } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { addTask } from '../actions/actions';

class TaskForm extends Component {
  state = {
    inputValueTask: ''
  }

  handleInputChange = e => {
    this.setState({ inputValueTask: e.target.value });
  }

  onClickAddTask = e => {
    e.preventDefault();
    
    this.props.addTask(this.state.inputValueTask)
  }

  render() {
    return (
        <form>
          <Input value={this.state.inputValueTask} onChange={this.handleInputChange} placeholder="O que tem que ser feito?" />
          <button onClick={this.onClickAddTask}>Adicionar</button>
        </form>  
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addTask: task => dispatch(addTask(task))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskForm);


const Input = styled.input`
  padding: 16px 16px 16px 16px;
  border: none;
  width: 40vw;
  outline: none;
`

