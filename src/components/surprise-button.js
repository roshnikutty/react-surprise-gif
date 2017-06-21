import React from 'react';

// Update this component
export default function SurpriseButton(props) {
    if(props.hidden === true){
        return null;
    }
    else {
    return <button onClick = {props.onClick}>Surprise!</button>;
    }
    
    
}

