// Code ClickityClick Component Here

import React from 'react';

class ClickityClick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  handleClick = () => {
    this.setState({
      clicked: true
    })
  }

  render() {
    return (
      <div>
        <p>I have {this.state.clicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick;
