

const initialState = {
    todosList: [
    {
        id: 1,
        task: 'Tarefa 1 do Redux',
        complete: false
    },
    {
        id: 2,
        task: 'Tarefa 2 do Redux',
        complete: true
    }],
    filter: 'todas'
}

export const todos = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TASK':
            const newTodo = {
                id: Date.now(),
                task: action.payload.task,
                complete: false
            }
            return {
                ...state,
                todosList: [newTodo, ...state.todosList]
            }

        case 'COMPLETE_TASK':
           { const newTodosList = state.todosList.map(todo => {
                if(todo.id === action.payload.id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                }
                return todo;
            })
            return {
                ...state,
                todosList: newTodosList
            }}
        case 'DELETE_TASK':
           { const newTodosList = state.todosList.filter(todo => {
                if(todo.id === action.payload.id) {
                    return false
                }
                return true
            });
            return {
                ...state,
                todosList: newTodosList
            }}

        case 'COMPLETE_ALL_TASKS':
        { const newTodosList = state.todosList.map(todo => {   
            return {
                ...todo,
                complete: true
            } 
            })
            return {
                ...state,
                todosList: newTodosList
            }}
        case 'DELETE_ALL_COMPLETE':
        { const newTodosList = state.todosList.filter(todo => {
                if(todo.complete === true) {
                    return false
                }
                return true
            });
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
