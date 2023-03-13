import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Show View</h1>
            <p>The <strong>{props.goat.name}</strong> is {props.goat.size}</p>
            <p>Its color is <span style={{ color: props.goat.color }}>{props.goat.color}</span></p>

            <br />

            <a href="/goat">Back</a>
        </div>
    )
}

export default Show;


//npm i method-override