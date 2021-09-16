import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="img-input">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          id="img-input"
          name="imagePath"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Image.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Image;
