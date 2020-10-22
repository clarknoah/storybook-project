import React from 'react';
import "./Button.css";
// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
    console.log(props)
    let classList = '';

    let types = ['primary', 'danger', 'success', 'warning']

    if(types.includes(props.type)){
        classList+= ` button-${props.type}`
    }
    console.log(props.large);
    if(props.large){
        classList += ` button-large`
    }

    if(props.outline){
        classList += ` button-${props.type}-outline`
    }

    return (
    <button onClick={props.onClick} className={classList}>
        {props.label}
    </button>
    )
}

export default Button; 