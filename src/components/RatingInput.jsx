import React, { Component } from 'react';

class RatingInput extends Component {
    render() {
        return <label data-testid={ this.props.data + "-label"}>
        {this.props.label}
      <input type="number" name={ this.props.type } value={ this.props.value } onChange={ this.props.handleClick } data-testid={ this.props.data }/>
    </label>;
    }
}

export default RatingInput;
