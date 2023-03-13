import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Show View</h1>
            <p>The <strong>{props.fish.name}</strong> is {props.fish.size}</p>
            <p>Its color is <span style={{ color: props.fish.color }}>{props.fish.color}</span></p>

            <br />

            <a href="/fish">Back</a>
        </div>
    )
}

export default Show;


//npm i method-override