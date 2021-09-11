import React, { Component } from 'react';

class ButtonReset extends Component {
    render() {  
      return (<button data-testid="send-button" type="button" onClick={ this.props.handleClick }> { this.props.label } </button>);
  }
}

export default ButtonReset;