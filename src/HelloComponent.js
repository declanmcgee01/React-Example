import React, { Component } from 'react';

class HelloComponent extends Component {
  render() {
    return (
      <div>
          {this.props.exampleProp}
      </div>
    );
  }
}

export default HelloComponent;
