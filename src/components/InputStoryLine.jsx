import React from 'react';
import PropTypes from 'prop-types';

class InputStoryLine extends React.Component {
  render() {
    const { storyLyne, handleChange } = this.props;
    return (
      <label htmlFor="text" data-testid="storyLine-input-label">
        Sinopse
        <textarea
          data-testid="storyLine-input"
          onChange={ handleChange }
          value={ storyLyne }
          nome="storyLine"
          id="StoryLine"
        />
      </label>
    );
  }
}

InputStoryLine.propTypes = PropTypes.shape({
  value: PropTypes.string,
  handleChance: PropTypes.func,
}).isRequired;

export default InputStoryLine;
