import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SubtitleInput extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            name="subtitle"
            type="text"
            value={ value }
            onChange={ onChange }
            data-testid="subtitle-input"
          />
        </label>
      </div>
    );
  }
}

SubtitleInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
