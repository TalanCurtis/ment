import React, { Component } from 'react';
import axios from 'axios';
import TaskCard from '../../components/TaskCard/TaskCard';
import { connect } from 'react-redux';
import {getTasks, addTask, deleteTask} from '../../ducks/reducer';

class TaskList extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [],
      newTask: {
        title: '',
        description: '',
        completed: false
      }
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleComplete = this.handleComplete.bind(this)
  }
  componentDidMount() {
    // assessment 1
    // axios.get('https://practiceapi.devmountain.com/api/tasks').then(res => {
    //   this.setState({ tasks: res.data })
    //   console.log(res.data)
    // })

    // assessment 2
    this.props.getTasks()
    console.log('props by redux',this.props)

  }
  handleChange(title, value) {
    let copy = Object.assign({}, this.state.newTask, { [title]: value })
    this.setState({
      newTask: copy
    })
    console.log('state', this.state.newTask)
  }

  handleAdd() {
    // assessment 1
    // axios.post('https://practiceapi.devmountain.com/api/tasks', this.state.newTask).then(res => {
    //   this.setState({ tasks: res.data })
    // })

    // assessment 2
    this.props.addTask(this.state.newTask)
  }

  handleDelete(id) {
    console.log('deleted', id)
    // assessment 1
    // axios.delete('https://practiceapi.devmountain.com/api/tasks/' + id).then(res => {
    //   console.log(res.data)
    //   this.setState({ tasks: res.data })
    // })

    // assessment 2
    this.props.deleteTask(id)
  }

  handleComplete(task) {
    console.log('complete', task)
    let body = task
    body.completed = !body.completed
    axios.patch('https://practiceapi.devmountain.com/api/tasks/'+ task.id, body).then(res=>{
        console.log('res',res.data)
        this.props.getTasks()
    })
    
}


  render() {
    const tasksList = this.props.tasks.map((x, i) => {
      return (
        <div key={i}>
            <TaskCard title={x.title} id={x.id} 
            delete={this.handleDelete} 
            link={'/TaskDetails/' + x.id} 
            handleComplete={this.handleComplete} 
            task={x}
            completed={x.completed}/>
        </div>
      )
    })

    return (
      <div className="App">
        <button onClick={()=>console.log(this.props)}>Test</button>
        <div>
          <h1>To-Do:</h1>
          <input title='title' type="text" onChange={(e) => this.handleChange(e.target.title, e.target.value)} />
          <button disabled={!this.state.newTask.title} onClick={() => this.handleAdd()}> Add New Task</button>
        </div>
        {tasksList}
      </div>
    );
  }
}

const actionOutputs={
  getTasks,
  addTask,
  deleteTask
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, actionOutputs)(TaskList);
