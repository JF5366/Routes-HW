import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Show View</h1>
            <p>The <strong>{props.bird.name}</strong> is {props.bird.size}</p>
            <p>Its color is <span style={{ color: props.bird.color }}>{props.bird.color}</span></p>

            <br />

            <a href="/bird">Back</a>
        </div>
    )
}

export default Show;


//npm i method-override