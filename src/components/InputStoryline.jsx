import React from 'react';
import PropTypes from 'prop-types';

class InputStoryline extends React.Component {

  render() {
    const { storyline, handleChange } = this.props;
    return (
      <label htmlFor="storyline" data-testid="storyline-input-label">
        Sinopse
        <input
          name="storyline"
          value={ storyline }
          handleChange={ handleChange }
          data-testid="storyline-input"
          type="text"
        />
      </label>

    );
  }
}

InputStoryline.propTypes = {
  rating: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default InputStoryline;
