import React, { Component } from 'react';

class InputRating extends Component {
  render() {
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Título
        <input type="number" data-testid="rating-input" />
      </label>
    );
  }
}

export default InputRating;
