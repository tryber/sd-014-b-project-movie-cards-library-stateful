import React from 'react';
import PropTypes from 'prop-types';

class InputTextarea extends React.Component {
  render() {
    const { storyline, handleChange } = this.props;

    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input">
        Sinopse
        <textarea
          data-testid="storyline-input"
          name="storyline"
          value={ storyline }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputTextarea.propTypes = {
  handleChange: PropTypes.func.isRequired,
  storyline: PropTypes.string.isRequired,
};

export default InputTextarea;
