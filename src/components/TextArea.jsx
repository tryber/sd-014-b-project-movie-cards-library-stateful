import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { text, labelId, initialState, inputId, onChange } = this.props;
    return (
      <label htmlFor={ inputId } data-testid={ labelId }>
        {text}
        <textarea
          data-testid={ inputId }
          cols="30"
          rows="10"
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
