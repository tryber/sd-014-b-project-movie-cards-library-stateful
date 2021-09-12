import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputTitle extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <div>
        <label htmlFor="title" data-testid="title-input-label">
          Título
          <input
            type="text"
            value={ value }
            onChange={ onChange }
            data-testid="title-input"
            name="title"
          />
        </label>
      </div>
    );
  }
}

InputTitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
};
