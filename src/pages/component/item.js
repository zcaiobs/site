import React from 'react'
import '../styles/item.css'

const Item = (props) => {
    return (
        <div className="canvas">
            <img src={props.img} alt="service"/>
            <div>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>
        </div> 
    )
}

export default Item