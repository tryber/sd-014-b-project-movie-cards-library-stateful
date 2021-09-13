import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTitle extends Component {
  render() {
    const { value, funcCallback } = this.props;
    return (
      <label htmlFor="title" data-testid="title-input-label">
        Título
        <input
          name="title"
          data-testid="title-input"
          type="text"
          value={ value }
          id="title"
          onChange={ funcCallback }
        />
      </label>
    );
  }
}
InputTitle.propTypes = {
  value: PropTypes.string.isRequired,
  funcCallback: PropTypes.func.isRequired,
};

export default InputTitle;
