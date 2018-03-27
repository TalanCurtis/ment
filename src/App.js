import React, { Component } from 'react';
import './Reset.css'
import './App.css';
import axios from 'axios'
import TaskCard from './components/TaskCard/TaskCard'

class App extends Component {
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
  }
  componentDidMount(){
    axios.get('https://practiceapi.devmountain.com/api/tasks').then(res => {
      this.setState({tasks: res.data})
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

  render() {
    const tasksList = this.state.tasks.map((x, i)=>{ return(
      <div key={i}>
        <TaskCard title={x.title} id={x.id}/>
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

export default App;
