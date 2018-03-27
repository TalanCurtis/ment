import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import { deleteTask, getTasks } from '../../ducks/reducer';

class TaskDetails extends Component {
    constructor() {
        super()
        this.state = {
            originalTask: {
                id: undefined,
                title: '',
                description: '',
                completed: false
            },
            updatedTask: {
                id: undefined,
                title: '',
                description: '',
                completed: false
            }
        }
    }

    componentDidMount() {
        // let taskId = this.props.match.params.id * 1
        // assessment 1
        // axios.get('https://practiceapi.devmountain.com/api/tasks').then(res => {
        //     let filtered = res.data.filter(x => x.id === taskId)
        //     this.setState({
        //         originalTask: filtered[0],
        //         updatedTask: filtered[0]
        //     })
        //     console.log(this.state)
        // })

        // assessment 2
        let taskId = this.props.match.params.id * 1
        this.props.getTasks().then(res => {
            let filtered = this.props.tasks.filter(x => x.id === taskId)
                this.setState({
                    originalTask: filtered[0],
                    updatedTask: filtered[0]
                })
        })

    }

    test(){
        console.log('props', this.props)
    }

    handleChange(title, value) {
        let original = { ...this.state.originalTask }
        let updated = { ...this.state.updatedTask, [title]: value }
        console.log('orig ', original)
        console.log('upda ', updated)
        this.setState({
            originalTask: original,
            updatedTask: updated
        })
        console.log('state', this.state)
    }

    handleSave() {
        console.log('handle save')
        axios.patch('https://practiceapi.devmountain.com/api/tasks/' + this.state.updatedTask.id, this.state.updatedTask)
            .then(res => {
                console.log('save res', res.data)
                this.props.history.push('/')
            })
    }

    handleDelete() {
        // let id = this.state.originalTask.id
        // assesment 1
        // console.log('deleted', id)
        // axios.delete('https://practiceapi.devmountain.com/api/tasks/' + id).then(res => {
        //     console.log(res.data)
        //     this.setState({ tasks: res.data })
        //     this.props.history.push('/')
        // })

        // assessment 2
        let id = this.state.originalTask.id
        this.props.deleteTask(id)
        this.props.history.push('/')
    }

    handleCancel() {
        console.log('cancel')
        this.setState({ updatedTask: this.state.originalTask })
    }

    handleComplete() {
        console.log('complete')
        let id = this.state.originalTask.id
        let body = this.state.originalTask
        // console.log('id', id, body.completed)
        body.completed = !body.completed
        // console.log('id', id, body)
        axios.patch('https://practiceapi.devmountain.com/api/tasks/'+ id, body).then(res=>{
            // console.log('res',res.data)
            this.props.getTasks().then(res => {
                let filtered = this.props.tasks.filter(x => x.id === id)
                    this.setState({
                        originalTask: filtered[0],
                        updatedTask: filtered[0]
                    })
            })
        })
    }

    render() {
        return (
            <div>
                <Link to={'/'}>back to Tasks</Link>
                <button onClick={()=>this.test()}>Test</button>
                <div className='Details'>
                    <div>
                        <h1>Task:</h1>
                        <input type="text" value={this.state.updatedTask.title} style={{ width: "300px" }}
                            title='title'
                            onChange={(e) => this.handleChange(e.target.title, e.target.value)}
                        />
                        <button onClick={() => { this.handleComplete() }}>Completed</button>
                    </div>
                    <div>
                        <h1>Description:</h1>
                        <textarea name="" id="" cols="30" rows="10"
                            style={{ width: "300px" }}
                            title='description'
                            value={this.state.updatedTask.description}
                            onChange={(e) => this.handleChange(e.target.title, e.target.value)}
                        ></textarea>
                    </div>
                    <div>
                        <button onClick={() => this.handleSave()}> Save </button>
                        <button onClick={() => this.handleCancel()}> Cancel </button>
                        <button onClick={() => this.handleDelete()}> Delete </button>
                    </div>
                </div>
            </div>
        );
    }
}


const actionOutputs={
    getTasks,
    deleteTask
  }
  
  function mapStateToProps(state) {
    return state
  }

export default connect(mapStateToProps, actionOutputs)(TaskDetails);