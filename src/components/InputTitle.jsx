import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputTitle extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="input-text" data-testid="title-input-label">
        <p>Título</p>
        <input
          name="title"
          type="text"
          id="input-text"
          value={ value }
          onChange={ onChange }
          data-testid="title-input"
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
