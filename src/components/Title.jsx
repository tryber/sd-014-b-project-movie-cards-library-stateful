import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="text">
        Título
        <input
          type="text"
          name="title"
          data-testid="title-input"
          value={ value }
          onChange={ onChange }

        />

      </label>
    );
  }
}
Title.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Title;
