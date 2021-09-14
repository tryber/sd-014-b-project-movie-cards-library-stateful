import React, { Component } from 'react';

class InputGenre extends Component {
  render() {
    return (
      <label htmlFor="genre-input" data-testid="genre-input-label">
        Gênero
        <input type="text" data-testid="genre-input" />
      </label>
    );
  }
}

export default InputGenre;
