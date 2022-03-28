import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSubtitle extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="subTitle" data-testid="subtitle-input-label">
        Subtítulo
        <input
          data-testid="subtitle-input"
          name="subtitle"
          id="subTitle"
          type="text"
          value={ value }
          onChange={ onChange }
          required
        />
      </label>
    );
  }
}

InputSubtitle.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputSubtitle;
