import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { title, value, onChange } = this.props;

    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          id="image"
          data-testid="image-input"
          alt={ title }
          type="text"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Image.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Image;
