import React, { Component } from 'react';
import axios from 'axios'
import TaskCard from '../../components/TaskCard/TaskCard'

class TaskList extends Component {
  constructor(){
    super()
    this.state = {
      tasks:[],
      newTask:{
        title:'',
        description:'',
        completed: false
      }
    }
    this.handleDelete = this.handleDelete.bind(this)
  }
  componentDidMount(){
    axios.get('https://practiceapi.devmountain.com/api/tasks').then(res => {
      this.setState({tasks: res.data})
      console.log(res.data)
    })
  }
  handleChange(title, value){
    let copy = Object.assign({}, this.state.newTask, {[title]:value})
    this.setState({
      newTask:copy
    })
    console.log('state', this.state.newTask)
  }

  handleAdd(){
    axios.post('https://practiceapi.devmountain.com/api/tasks', this.state.newTask).then(res => {
      this.setState({tasks: res.data})
    })
    
  }

  handleDelete(id){
    console.log('deleted', id)
    axios.delete('https://practiceapi.devmountain.com/api/tasks/'+id).then(res => {
      console.log(res.data)
      this.setState({tasks: res.data})
    })
  }

  render() {
    const tasksList = this.state.tasks.map((x, i)=>{ return(
      <div key={i}>
        <TaskCard title={x.title} id={x.id} delete={this.handleDelete}/>
      </div>
    )}) 

    return (
      <div className="App">
        <div>
          <h1>To-Do:</h1>
          <input title='title' type="text" onChange={(e)=>this.handleChange(e.target.title, e.target.value)}/>
          <button disabled={!this.state.newTask.title} onClick={()=>this.handleAdd()}> Add New Task</button>
        </div>
        {tasksList}
      </div>
    );
  }
}

export default TaskList;
