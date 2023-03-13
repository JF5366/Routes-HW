import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Show View</h1>
            <p>The <strong>{props.cow.name}</strong> is {props.cow.size}</p>
            <p>Its color is <span style={{ color: props.cow.color }}>{props.cow.color}</span></p>

            <br />

            <a href="/cow">Back</a>
        </div>
    )
}

export default Show;


//npm i method-override