import React, { Component }  from 'react';
import './App.css';
import styled from 'styled-components'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      taskList: [],
      inputTaskListValue: "",
      filter: ""
    }
  }

  componentDidUpdate() {
    const taskToBeSaved = {task: this.state.inputTaskListValue, id: Date.now(), completa: Boolean}

    const objectString = JSON.stringify(taskToBeSaved);

    localStorage.setItem('inputTasksField', objectString);
  }

  // componentDidMount() {
  //   const inputData = localStorage.getItem('inputTasksField');
  //   // console.log(inputData);

  //   if(inputData !== null) {
  //     const inputDataObject = JSON.parse(inputData);

  //     // this.setState({ task: inputDataObject.task });
  //   }
  // }

  onChangeTask = e => {
    this.setState({ inputTaskListValue: e.target.value });
  }

  handleNewTask = () => {
    const newTask = { task: this.state.inputTaskListValue, id: Date.now(), completa: Boolean };
    const copyNewTask = [...this.state.taskList, newTask];

    this.setState({ taskList: copyNewTask });

    this.state.inputTaskListValue = "";
  }


  onChangeFilter = (event) => {
    this.setState({ filter: event.target.value });
  }

  selectTask = id => {
    const aux = this.state.taskList.map(task => {
      if(task.id === id) {
        task.completa = !task.completa
      }
      return task
    })

    this.setState({ taskList: aux })
  }

  deleteTask() {
    this.setState({  })
  }

  render() {
   
    const listaFiltrada = this.state.taskList
    .filter(task => {
      switch (this.state.filter) {
        case 'pendentes':
          return !task.completa
        case 'completas':
          return task.completa
        default:
          return true
      }
    })


    return (
      <div className="App">
       <h1>Lista de tarefas</h1>
       <input value={this.inputTaskListValue} onChange={this.onChangeTask} />
       <button onClick={this.handleNewTask}>Adicionar</button>
  
       <br/><br/>

      <label>Filtro </label>
      <select value={this.state.filter} onChange={this.onChangeFilter}>
        <option value="">Nenhum</option>
        <option value="pendentes">Pendentes</option>
        <option value="completas">Completas</option>
      </select>

      <TarefaList>
          {listaFiltrada.map(task => {
            return (
              <Tarefa
                completa={task.completa}
                onClick={() => this.selectTask(task.id)}
              >
                <>
                {task.task}
                </>
              </Tarefa>
            )
          })}
        </TarefaList>       
      </div>
    );
  }
}

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
  margin: 0 auto;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

export default App;
