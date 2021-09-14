import React, { Component } from 'react';

class InputSubtitle extends Component {
  render() {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input type="text" data-testid="subtitle-input" />
      </label>
    );
  }
}

export default InputSubtitle;
