import React, { Component } from 'react';

class TextInput extends Component {
    render() {
      return <label data-testid={ this.props.data + "-label"}>
          {this.props.label}
        <input type="text" name={ this.props.type } onChange={ this.props.handleClick } data-testid={ this.props.data }/>
      </label>
    }
}

export default TextInput;