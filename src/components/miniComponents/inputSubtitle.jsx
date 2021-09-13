import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSubtitle extends Component {
  render() {
    const { onChange, subtitle } = this.props;
    return (
      <label
        data-testid="subtitle-input-label"
        htmlFor="subtitle-input-label"
        name="subtitle"
      >
        Subtítulo
        <input
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ onChange }
          name="subtitle"
          type="text"
        />
      </label>
    );
  }
}

InputSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputSubtitle;
