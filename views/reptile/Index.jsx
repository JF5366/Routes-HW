import React from 'react'

function Index(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way
    return (
        <div>
            <h1>Index View</h1>
            <ul>
                {props.reptile.map((reptile, index) => 
                    <li>
                        <a href={`/reptile/${index}`}><strong>{reptile.name}</strong></a>
                    </li>
                )}
            </ul>
          
        </div>
    )
}

export default Index