import React from 'react';

class TextareaStoryline extends React.Component {
  render() {
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          data-testid="storyline-input"
        />
      </label>
    );
  }
}

export default TextareaStoryline;
