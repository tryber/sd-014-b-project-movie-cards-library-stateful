import React from 'react';

class InputSubtitle extends React.Component {
  render() {
    return (
      <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          type="text"
          data-testid="subtitle-input"
        />
      </label>
    );
  }
}

export default InputSubtitle;
