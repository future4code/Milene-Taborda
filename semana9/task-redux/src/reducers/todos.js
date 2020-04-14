

const initialState = {
    taskList: []
}

const todos = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            const newTaskList = [...state.taskList, action.payload]
            return { ...state, taskList: newTaskList }

        case 'COMPLETE_TASK':
            return {...state, inputTask: action.payload.completeTask }
        default:
            return state;
    }
}

export default todos;
