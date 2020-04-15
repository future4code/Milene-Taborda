import React, { Component } from 'react';
import { connect } from 'react-redux';

import { completeTask, deleteTask  } from '../actions/actions';

class TaskList extends Component {

  render() {
    console.log(this.props.taskList)
    return (
      <ul>
          {this.props.taskList.filter((task) => {
            const filter = this.props.filter

            if(filter === 'pendentes') return task.complete === false
            if(filter === 'completas') return task.complete === true
            return true

          }).map(task => (
            <li key={task.id} onClick={() => this.props.completeTask(task.id)}>
              {task.task} - completa: {String(task.complete)} 
              <button onClick={() => this.props.deleteTask(task.id) }>Deletar</button>
            </li>
          ))}
       </ul>
    );
  }     
}

const mapStateToProps = state => {
  return {
    taskList: state.todos.todosList,
    filter: state.todos.filter
  }
};

const mapDispatchToProps = dispatch => {
 return {
  completeTask: (id) => dispatch(completeTask(id)),
  deleteTask: (id) => dispatch(deleteTask(id))
 }
};
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
) (TaskList);
  