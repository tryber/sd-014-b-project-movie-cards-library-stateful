import React from 'react';
import PropTypes from 'prop-types';

export default class Image extends React.Component {
  render() {
    const { handleInitialValue, value } = this.props;
    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          onChange={ handleInitialValue }
          value={ value }
          data-testid="image-input"
          id="image-input"
        />
      </label>
    );
  }
}

Image.propTypes = {
  handleInitialValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
