import React from 'react';
import PropTypes from 'prop-types';

class InputImage extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="text" data-testid="image-input-label">
        Título
        <input
          type="text"
          data-testid="image-input"
          onChange={ handleChange }
          value={ value }
          nome="image"
          id="image"
        />
      </label>
    );
  }
}

InputImage.propTypes = PropTypes.shape({
  value: PropTypes.string,
  handleChance: PropTypes.func,
}).isRequired;

export default InputImage;
