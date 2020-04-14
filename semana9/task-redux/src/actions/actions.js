

export function addTask(task) {
    return {
        type: 'ADD_TASK',
        payload: {
            newTask: task,
            id: Date.now(),
            complete: false
        }
    }
}

export function completeTask(id) {
    return {
        type: 'COMPLETE_TASK',
        payload: {
            completeTask: id,
            complete: true
        }
    }
}

export function CompleteAll() {
    return {
        type: 'COMPLETE_ALL'
    }
}

export function deleteTask(id) {
    return {
        type: 'DELETE_TASK',
        payload: {
            id: id
        }
    }
}

export function deleteCompleted() {
    return {
        type: 'DELETE_COMPLETED'
    }
}

export function filterAll() {
    return {
        type: 'FILTER_ALL',
    }
}

export function filterPending() {
    return {
        type: 'FILTER_PENDING',
    }
}

export function filterCompleted() {
    return {
        type: 'FILTER_export COMPLETED'
    }
}
