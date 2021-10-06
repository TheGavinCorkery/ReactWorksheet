import React from 'react'

const DisplayName = (props) => {
    return ( 
        <div className = "DisplayName">
            <h1>{props.firstName} {props.lastName}</h1>
            <ol>
                {props.names.map((name) => {
                    return <li>{name}</li>
                })}
            </ol>
        </div>
     );
}
 
export default DisplayName;