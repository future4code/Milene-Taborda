import axios from "axios"

export const setTask = taskList => {
    return {
        type: 'SET_TASK',
        payload: {
            taskList
        }
    }
}

export const completeAllTasks = () => {
    return {
        type: 'COMPLETE_ALL_TASKS'
    }
}

export const setFilter = (filter) => {
    return {
        type: 'SET_FILTER',
        payload: {
            filter
        }
    }
}


export const fetchTasks = () => async (dispatch, getState) => {
    const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/Milene/todos')

    dispatch(setTask(response.data.todos))
}

export const createTask = text => async (dispatch, getState) => {
    const body = {
        text: text
    }
    const response = await axios.post('https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/Milene/todos', body)

    dispatch(fetchTasks()) 
}

export const completeTask = id => async (dispatch, getState) => {
    const response = await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/Milene/todos/${id}/toggle`)

    dispatch(fetchTasks())
}

export const deleteTask = id => async (dispatch, getState) => {
    const response = await axios.delete(`https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/Milene/todos/${id}`)

    dispatch(fetchTasks())
}

export const deleteAllComplete = () => async (dispatch, getState) => {
    const response = await axios.delete('https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/Milene/todos/delete-done')

    dispatch(fetchTasks())
}