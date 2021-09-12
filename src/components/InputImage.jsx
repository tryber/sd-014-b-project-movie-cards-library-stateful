import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputImage extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label data-testid="image-input-label" htmlFor="image-input">
          Imagem
          <input
            value={ value }
            onChange={ onChange }
            data-testid="image-input"
            name="imagePath"
            type="text"
            id="imagePath"
          />
        </label>
      </div>
    );
  }
}
InputImage.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
