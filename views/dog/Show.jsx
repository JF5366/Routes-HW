import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Show View</h1>
            <p>The <strong>{props.dog.name}</strong> is {props.dog.size}</p>
            <p>Its color is <span style={{ color: props.dog.color }}>{props.dog.color}</span></p>

            <br />

            <a href="/dog">Back</a>
        </div>
    )
}

export default Show;


//npm i method-override