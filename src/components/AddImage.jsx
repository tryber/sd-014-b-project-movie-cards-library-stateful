import React from 'react';
import PropTypes from 'prop-types';

class AddImage extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          data-testid="image-input"
          name="imagePath"
          type="text"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddImage.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddImage;
