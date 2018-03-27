import React from 'react'
import './TaskCard.css'
import {Link} from 'react-router-dom'

export default function TaskCard(props) {
    return (
        <div className='TaskCard'>
            <div>
                <Link to={props.link} style={{ paddingLeft: 13, textDecoration: 'none', color: 'black' }}>
                    {props.title}
                </Link>
            </div>
            <div>
                {props.completed? 
                    <button style={{ 'backgroundColor': "green", 'border': "none", 'height': '50px' }}
                    onClick={()=>props.handleComplete(props.task)}
                    >Complete</button>
                    :<button style={{ 'backgroundColor': "purple", 'border': "none", 'height': '50px' }}
                    onClick={()=>props.handleComplete(props.task)}
                    >Completed</button>
                }
                <button style={{ 'backgroundColor': "red", 'border': "none", 'height': '50px' }}
                    onClick={() => props.delete(props.id)}
                >X</button>
            </div>
        </div>
    )
}