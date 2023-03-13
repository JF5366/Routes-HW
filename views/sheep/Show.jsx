import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Show View</h1>
            <p>The <strong>{props.sheep.name}</strong> is {props.sheep.size}</p>
            <p>Its color is <span style={{ color: props.sheep.color }}>{props.sheep.color}</span></p>

            <br />

            <a href="/sheep">Back</a>
        </div>
    )
}

export default Show;


//npm i method-override