import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSubtitle extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="subtitleFormAdd" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          name="subtitle"
          id="subtitleFormAdd"
          value={ value }
          data-testid="subtitle-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputSubtitle.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputSubtitle;
