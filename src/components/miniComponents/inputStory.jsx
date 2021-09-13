import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputStory extends Component {
  render() {
    const { onChange, storyLine } = this.props;
    return (
      <label
        data-testid="storyline-input-label"
        htmlFor="storyline-input-label"
        name="storyLine"
      >
        Sinopse
        <input
          data-testid="storyline-input"
          onChange={ onChange }
          value={ storyLine }
          name="storyLine"
          type="text"
        />
      </label>
    );
  }
}

InputStory.propTypes = {
  storyLine: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputStory;
