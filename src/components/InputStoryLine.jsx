import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputStoryLine extends Component {
  render() {
    const { storyLine, onChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="inputStoryLine">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyLine"
          id="inputStoryLine"
          value={ storyLine }
          onChange={ onChange }
        />
      </label>
    );
  }
}

InputStoryLine.propTypes = {
  storyLine: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputStoryLine;
