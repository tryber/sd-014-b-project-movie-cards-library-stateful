import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSubTitle extends Component {
  render() {
    const { value, funcCallback } = this.props;
    return (
      <label htmlFor="title" data-testid="subtitle-input-label">
        Subtítulo
        <input
          name="subtitle"
          data-testid="subtitle-input"
          type="text"
          value={ value }
          id="subtitle"
          onChange={ funcCallback }
        />
      </label>
    );
  }
}
InputSubTitle.propTypes = {
  value: PropTypes.string.isRequired,
  funcCallback: PropTypes.func.isRequired,
};

export default InputSubTitle;
