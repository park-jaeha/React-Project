import React from 'react';


const InsideApp = (props) =>{
    return(
    <div>
        {props.count}
        <button onClick={props.handleChange}>Click here!</button>
    </div>
    );
}

export default InsideApp;