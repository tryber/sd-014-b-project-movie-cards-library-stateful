import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { type, text, labelId, initialState, inputId, onChange } = this.props;
    return (
      <label htmlFor={ inputId } data-testid={ labelId }>
        {text}
        <input
          type={ type }
          data-testid={ inputId }
          value={ initialState }
          onChange={ (event) => {
            onChange(event);
          } }
        />
      </label>
    );
  }
}

export default Input;
