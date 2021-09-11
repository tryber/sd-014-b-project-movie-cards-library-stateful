import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Title extends Component {
  render() {
    const { titleValue, onChange } = this.props;
    return (
      <label htmlFor="title-input-label" data-testid="title-input-label">
        Título
        <input
          data-testid="title-input"
          type="text"
          name="title"
          value={ titleValue }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Title.propTypes = {
  titleValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
