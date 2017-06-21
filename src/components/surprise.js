import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';

export default class Surprise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }

    setClicked(clicked) {
        console.log(clicked);
        this.setState({ clicked });
    }

    render() {
        // Show the button to start with
        return (
             <div>
                 <SurpriseImage visible = {this.state.clicked}/>
                 <SurpriseButton onClick={() => this.setClicked(true)} hidden = {this.state.clicked} />
             </div>
        );}
}
