import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTitle extends Component {
  render() {
    const { onChange, title } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title-input-label" name="title">
        Título
        <input
          onChange={ onChange }
          value={ title }
          data-testid="title-input"
          name="title"
          type="text"
        />
      </label>
    );
  }
}

InputTitle.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputTitle;
