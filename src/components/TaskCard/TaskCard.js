import React from 'react'
import './TaskCard.css'

export default function TaskCard (props){
return(
    <div className='TaskCard'>
        {props.title}
        <div>
            <button style={{'backgroundColor':"green", 'border':"none", 'height': '50px'}}>Complete</button>
            <button style={{'backgroundColor':"red", 'border':"none", 'height': '50px'}}
            onClick={()=>props.delete(props.id)}
            >X</button>
        </div>
    </div>
)
}