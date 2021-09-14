import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTitle extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="titleFormAdd" data-testid="title-input-label">
        Título
        <input
          type="text"
          value={ value }
          name="title"
          data-testid="title-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputTitle;
