import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { imagePath, onChange } = this.props;
    return (
      <div>
        <label data-testid="image-input-label" htmlFor="image">
          Imagem
          <input
            type="text"
            value={ imagePath }
            onChange={ onChange }
            name="image"
            data-testid="image-input"
          />
        </label>
      </div>
    );
  }
}

Image.propTypes = {
  imagePath: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Image;
