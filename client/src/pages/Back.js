import React, { Component } from 'react';
import './Back.css';

class Back extends Component {
  constructor() {
    super();
    this.state = {
      test: []
    };
  }

  componentDidMount() {
    fetch('/api/test')
      .then(res => res.json())
      .then(test => this.setState({test}, () => console.log('Data:...', test)));
  }

  render() {
    return (
      <div>
        <h2>Test-Backend</h2>
        <ul>
        {this.state.test.map(test => 
          <li key={test.id}>{test.firstName} {test.lastName}</li>
        )}
        </ul>
      </div>
    );
  }
}

export default Back;
