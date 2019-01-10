import React, { Component } from 'react';

class SumComponent extends Component {

    constructor(){
        super();
        this.state = {
        num1: 2,
        num2: 4,
        sum: 0
        }
    }

    update = () => {
        this.setState({
        sum: this.state.sum = this.state.num1 + this.state.num2
        });
    }

    render() {
        return (
            <div>
                <h1>Add Two Numbers</h1>
                <h2><button onClick = {this.update}>Add Two Numbers</button></h2>
                <h3>{this.state.sum}</h3>
            </div>
        );
    }
}
export default SumComponent;