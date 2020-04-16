

const initialState = {
    todosList: [],
    filter: ''
}

export const todos = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_TASK':
            return {
                ...state,
                todosList: action.payload.taskList
            }

        case 'COMPLETE_ALL_TASKS':
        { const newTodosList = state.todosList.map(todo => {   
            return {
                ...todo,
                done: true
            } 
            })
            return {
                ...state,
                todosList: newTodosList
            }}
        
        case 'SET_FILTER':{
            return {
                ...state,
                filter: action.payload.filter
            }
        }
        default:
            return state;
    }
}
