import React from 'react';
import PropTypes from 'prop-types';

class AddImage extends React.Component {
  render() {
    const { imagePath } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          id="image-input"
          data-testid="image-input"
          type="text"
          value={ imagePath }
          onChange={ this.handleChange }
        />
      </label>
    );
  }
}

AddImage.propTypes = {
  imagePath: PropTypes.string.isRequired,
};

export default AddImage;
