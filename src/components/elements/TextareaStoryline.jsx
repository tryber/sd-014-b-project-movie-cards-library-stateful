import React from 'react';

class TextareaStoryline extends React.Component {
  render() {
    const { handleChange, state } = this.props;

    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          value={ state }
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default TextareaStoryline;
