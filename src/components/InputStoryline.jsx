import React, { Component } from 'react';

class InputStoryline extends Component {
  render() {
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <textarea data-testid="storyline-input" />
      </label>
    );
  }
}

export default InputStoryline;
