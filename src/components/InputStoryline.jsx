import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputStoryline extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="storylineFormAdd" data-testid="storyline-input-label">
        Sinopse
        <textarea
          value={ value }
          name="storyline"
          data-testid="storyline-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputStoryline.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputStoryline;
