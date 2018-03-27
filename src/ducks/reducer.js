import axios from 'axios';

// Intitial State
const initialState = {
    tasks:[]
}

// Actions
const GET_TASKS = 'GET_TASKS'
const ADD_TASK = 'ADD_TASK'

// Action Builders
export function getTasks(){
    // run axios call to hit database
    return{
        type: GET_TASKS,
        payload: []// Updated Tasks Array
    }
}
export function addTask(){
    // run axios call to hit database
    return{
        type: ADD_TASK,
        payload: []// Updated Tasks Array
    }
}

// Reducer
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TASKS:
            return { ...state, tasks: action.payload }
        case ADD_TASK:
            return { ...state, tasks: action.payload }
        default:
            return state;
    }
}
