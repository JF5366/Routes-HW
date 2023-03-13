import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Show View</h1>
            <p>The <strong>{props.cat.name}</strong> is {props.cat.size}</p>
            <p>Its color is <span style={{ color: props.cat.color }}>{props.cat.color}</span></p>

            <br />

            <a href="/cat">Back</a>
        </div>
    )
}

export default Show;


//npm i method-override