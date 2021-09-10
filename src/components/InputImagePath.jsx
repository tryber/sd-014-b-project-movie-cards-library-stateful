import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputImagePath extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="select-input" data-testid="image-input-label">
        <p>Gênero</p>
        <input
          text="Imagem"
          id="image-input"
          name="imagePath"
          value={ value }
          onChange={ onChange }
          type="text"
          data-testid="image-input"
        />
      </label>
    );
  }
}

InputImagePath.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
