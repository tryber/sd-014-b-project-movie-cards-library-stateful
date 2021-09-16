import React from 'react';
import PropTypes from 'prop-types';

class InputTextArea extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          type="text"
          value={ value }
          data-testid="storyline-input"
          onChange={ handleChange }
          name="storyline"
          cols="30"
          rows="4"
        />
      </label>
    );
  }
}

InputTextArea.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default InputTextArea;
