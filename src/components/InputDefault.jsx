import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputDefault extends Component {
  render() {
    const { description, title, handleChange } = this.props;
    return (
      <label htmlFor="title-input" data-testid="title-input-label">
        { description }
        <input
          type="text"
          name="title"
          id="title-input"
          data-testid="title-input"
          value={ title }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputDefault.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputDefault;
