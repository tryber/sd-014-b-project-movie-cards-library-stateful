import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ImageInput extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
            name="imagePath"
            type="text"
            value={ value }
            onChange={ onChange }
            data-testid="image-input"
          />
        </label>
      </div>
    );
  }
}

ImageInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
