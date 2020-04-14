import { combineReducers } from 'redux';
import task from './todos'

const rootReducer = combineReducers({
    task: task
})

export default rootReducer;