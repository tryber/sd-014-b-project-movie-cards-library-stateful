import React, { Component } from 'react';

export default class InputLabel extends Component {
  render() {
    const {
      type,
      text,
      labelTestId,
      inputTestId,
      id,
      name,
      onChange,
      value,
    } = this.props;
    return (
      <label htmlFor={ id } data-testid={ labelTestId }>
        <p>{ text }</p>
        <input
          type={ type }
          data-testid={ inputTestId }
          id={ id }
          name={ name }
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}