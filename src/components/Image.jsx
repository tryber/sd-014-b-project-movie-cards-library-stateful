import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { title, value, onChange } = this.props;
    return (
      <div className="image">
        <label
          htmlFor="image"
          data-testid="image-input-label"
        >
          Imagem
          <input
            name="imagePath"
            type="text"
            alt={ title }
            data-testid="image-input"
            value={ value }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Image.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Image;
