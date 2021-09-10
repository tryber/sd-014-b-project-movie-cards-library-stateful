import React from 'react';
import PropTypes from 'prop-types';

class AddInputImage extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          data-testid="image-input"
          type="text"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddInputImage.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AddInputImage;
