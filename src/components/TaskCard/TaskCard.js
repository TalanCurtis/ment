import React from 'react'
import './TaskCard.css'

export default function TaskCard (props){
return(
    <div className='TaskCard'>
        {props.title}
        <div>
            <button>Complete</button>
            <button>X</button>
        </div>
    </div>
)
}