

export const addTask = (task) => {
    return {
        type: 'ADD_TASK',
        payload: {
            task,
            id: Date.now(),
            complete: false
        }
    }
}

export const completeTask = (id) => {
    return {
        type: 'COMPLETE_TASK',
        payload: {
            id
        }
    }
}

export const deleteTask = (id) => {
    return {
        type: 'DELETE_TASK',
        payload: {
           id
       }
    }
}

export const completeAllTasks = () => {
    return {
        type: 'COMPLETE_ALL_TASKS'
    }
}

export const deleteAllComplete = () => {
    return {
        type: 'DELETE_ALL_COMPLETE'
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

