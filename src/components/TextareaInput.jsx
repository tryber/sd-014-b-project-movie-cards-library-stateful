import React, { Component } from 'react';

class TextareaInput extends Component {
    render() {
        return <label data-testid={ this.props.data + "-label"}>
        {this.props.label}
        <textarea type="textarea" name={ this.props.type } onChange={ this.props.handleClick } data-testid={ this.props.data }></textarea>
    </label>
    }
}

export default TextareaInput;
