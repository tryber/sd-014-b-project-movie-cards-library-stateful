import React, { Component } from 'react';

class TextInputDefault extends Component {
  render() {
    const { name, id, value, handleChange, description, type } = this.props;
    return (
      <label htmlFor={ id }>
        { description }
        <input
          name={ name }
          id={ id }
          value={ value }
          onChange={ handleChange }
          type={ type }
        />
      </label>
    );
  }
}

export default TextInputDefault;
