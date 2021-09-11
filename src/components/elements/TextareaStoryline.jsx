import React from 'react';
import PropTypes from 'prop-types';

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

TextareaStoryline.propTypes = {
  handleChange: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
};

export default TextareaStoryline;
