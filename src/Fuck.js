import React, { useState, useEffect, useReducer } from 'react'

function Fuck() {

const initialstate = {
    text : ''
}
const reducer = () => {
     return(
        {text: state.text}
    )
}

const [state, dispatch] = useReducer(reducer, initialstate);

const addvalue = () => {
   dispatch();
}


   

    return (
        <div>
            <h1>To Do List</h1>
            <input type='text' value={state.text} onClick={(e) => state.text= e.target.value}></input>
            <button onClick={addvalue}>Add</button>
            <h1>{state.text}</h1>
        </div>
    )
}

export default Fuck
