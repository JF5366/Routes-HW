import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Show View</h1>
            <p>The <strong>{props.reptile.name}</strong> is {props.reptile.size}</p>
            <p>Its color is <span style={{ color: props.reptile.color }}>{props.reptile.color}</span></p>

            <br />

            <a href="/reptile">Back</a>
        </div>
    )
}

export default Show;


//npm i method-override