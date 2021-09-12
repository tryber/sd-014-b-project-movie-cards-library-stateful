import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputSubtitle extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            value={ value }
            onChange={ onChange }
            data-testid="subtitle-input"
            name="subtitle-input"
          />
        </label>
      </div>
    );
  }
}

InputSubtitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
