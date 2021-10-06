import React from 'react'

const AlertUser = (props) => {

    function createAlert() {
        window.alert("DevCodeCamp")
    }

    return ( 
        <div>
            <button onClick = {createAlert}>Click Me!</button>
        </div>
     );
}
 
export default AlertUser;