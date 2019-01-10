import React, { Component } from 'react';

class IncrementComponent extends Component {

    constructor(){
        super();
        this.state = {
        exampleNumber: 1
        }
    }

    update = () => {
        this.setState({
        exampleNumber: this.state.exampleNumber+1 
        });
    }

    render() {
        return (
            <div>
                <h1>Increment Number</h1>
                <h2>{this.state.exampleNumber}</h2>
                <h3><button onClick = {this.update}>Increment Number</button></h3>
            </div>
        );
    }
}
export default IncrementComponent;

