import React from 'react';

export default function SurpriseImage(props) {
    if(props.visible === false){
        return null;
    }
    else {
    return <img src="http://i.giphy.com/ueVYG9Cg4zBu0.gif" alt="A surprising horse" />
    }

}
