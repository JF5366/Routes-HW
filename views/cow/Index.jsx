import React from 'react'

function Index(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way
    return (
        <div>
            <h1>Index View</h1>
            <ul>
                {props.cow.map((cow, index) => 
                    <li>
                        <a href={`/cow/${index}`}><strong>{cow.name}</strong></a>
                    </li>
                )}
            </ul>
          
        </div>
    )
}

export default Index