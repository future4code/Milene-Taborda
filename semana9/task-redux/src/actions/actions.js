

function addTask(task) {
    return {
        type: 'ADD_TASK',
        payload: {
            newTask: task
        }
    }
}

function completeTask() {
    return {
        type: 'COMPLETE_TASK'
    }
}

function CompleteAll() {
    return {
        type: 'COMPLETE_ALL'
    }
}

function deleteTask() {
    return {
        type: 'DELETE_TASK'
    }
}

function deleteCompleted() {
    return {
        type: 'DELETE_COMPLETED'
    }
}

function filterAll() {
    return {
        type: 'FILTER_ALL',
    }
}

function filterPending() {
    return {
        type: 'FILTER_PENDING',
    }
}

function filterCompleted() {
    return {
        type: 'FILTER_COMPLETED'
    }
}
