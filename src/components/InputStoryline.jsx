import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputStoryline extends Component {
  render() {
    const { description, storyline, handleChange } = this.props;
    return (
      <label htmlFor="storyline-input" data-testid="storyline-input-label">
        { description }
        <input
          type="text"
          name="storyline"
          id="storyline-input"
          data-testid="storyline-input"
          value={ storyline }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputStoryline.propTypes = {
  description: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputStoryline;
