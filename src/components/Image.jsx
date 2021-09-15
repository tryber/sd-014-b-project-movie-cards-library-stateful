import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          value={ value }
          type="text"
          data-testid="image-input"
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
