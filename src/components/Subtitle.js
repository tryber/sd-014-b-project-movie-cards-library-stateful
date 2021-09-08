import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Subtitle extends Component {
  render() {
    const { subtitle, onChange } = this.props;
    return (
      <div>
        <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
          Subtítulo
          <input
            data-testid="subtitle-input"
            type="text"
            value={ subtitle }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Subtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
