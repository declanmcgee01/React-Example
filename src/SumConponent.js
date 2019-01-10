import React, { Component } from 'react';
import * as bloop from 'jquery';

class SumComponent extends Component {

    constructor(){
        super();
        this.state = {
        num1: 0,
        num2: 0,
        }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeNum1 = this.handleChangeNum1.bind(this);
    this.handleChangeNum2 = this.handleChangeNum2.bind(this);
    }

    handleChangeNum1(event) {
        this.setState({num1: document.getElementById("text1").value});
    }

    handleChangeNum2(event) {
        this.setState({num2: document.getElementById("text2").value});
    }

    handleSubmit = (event) => {
        console.log(this.state.num1);
        console.log(this.state.num2);
        alert("The sum of the numbers are: " + (Number(this.state.num1) +Number(this.state.num2)));
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Add Two Numbers</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Numbers:
                        <input id="text1" type="number"  onChange={(this.handleChangeNum1)}></input>
                        <input id="text2" type="number" onChange={(this.handleChangeNum2)}></input>
                        <input type="submit" value="Submit" ></input>
                    </label>
                    </form>
            </div>

        );
    }


}
export default SumComponent;