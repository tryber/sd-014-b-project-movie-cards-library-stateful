import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputSubtitle extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            value={ value }
            onChange={ onChange }
            data-testid="subtitle-input"
            name="subtitle"
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
