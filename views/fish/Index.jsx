import React from 'react'

function Index(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way
    return (
        <div>
            <h1>Index View</h1>
            <ul>
                {props.fish.map((fish, index) => 
                    <li>
                        <a href={`/fish/${index}`}><strong>{fish.name}</strong></a>
                    </li>
                )}
            </ul>
          
        </div>
    )
}

export default Index