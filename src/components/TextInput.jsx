import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextInput extends Component {
  render() {
    const { value,
      onChange,
    } = this.props;
    return (
      <div>
        <label data-testid="text-input-label" htmlFor="text-input">
          Inclui o texto:
          <input
            type="text"
            value={ value }
            onChange={ onChange }
            data-testid="text-input"
            name="searchText"
          />
        </label>
      </div>
    );
  }
}

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
