import React, { Component } from 'react';

class StateComponent extends Component {

    constructor(){
        super();
        this.state = {
        exampleText: "This is example text"
        }
    }

    update = () => {
        this.setState({
        exampleText: "This is new example text"
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.exampleText}</h1>
                <h2><button onClick = {this.update}>Update Text</button></h2>
            </div>
        );
    }
}
export default StateComponent;

