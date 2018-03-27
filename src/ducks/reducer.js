import axios from 'axios';

// Intitial State
const initialState = {
    tasks:[]
}

// Actions
const GET_TASKS = 'GET_TASKS'
const ADD_TASK = 'ADD_TASK'
const DELETE_TASK = 'DELETE_TASK'

// Action Builders
export function getTasks(){
    // run axios call to hit database
    let payload = axios.get('https://practiceapi.devmountain.com/api/tasks').then(res => {
        console.log('reducer log:',res.data)
        return res.data  })
    return{
        type: GET_TASKS,
        payload: payload
    }
}
export function addTask(newTask){
    // run axios call to hit database
    let payload = axios.post('https://practiceapi.devmountain.com/api/tasks', newTask).then(res => {
        return res.data})
    return{
        type: ADD_TASK,
        payload: payload// Updated Tasks Array
    }
}
export function deleteTask(id){
    // run axios call to hit database
    let payload = axios.delete('https://practiceapi.devmountain.com/api/tasks/' + id).then(res => {
        return res.data})
    return{
        type: ADD_TASK,
        payload: payload// Updated Tasks Array
    }
}

// Reducer
export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TASKS+'_FULFILLED':
            return { ...state, tasks: action.payload }
        case ADD_TASK+'_FULFILLED':
            return { ...state, tasks: action.payload }
        case DELETE_TASK+'_FULFILLED':
            return { ...state, tasks: action.payload }
        default:
            return state;
    }
}
