import React from 'react';
import "./Input.css";
// This is a functional component - just sent up a little differently as an arrow function!
const Input = (props) => {

    return (
    <input placeholder={props.placeholder}/> 
    )
}

export default Input; 