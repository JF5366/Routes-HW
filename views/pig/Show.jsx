import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Show View</h1>
            <p>The <strong>{props.horse.name}</strong> is {props.horse.size}</p>
            <p>Its color is <span style={{ color: props.horse.color }}>{props.horse.color}</span></p>

            <br />

            <a href="/horse">Back</a>
        </div>
    )
}

export default Show;


//npm i method-override