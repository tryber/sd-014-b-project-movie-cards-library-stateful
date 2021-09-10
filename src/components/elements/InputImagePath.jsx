import React from 'react';
import PropTypes from 'prop-types';

class InputImagePath extends React.Component {
  render() {
    const { handleChange, state } = this.props;

    return (
      <label htmlFor="image-input" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          value={ state }
          data-testid="image-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputImagePath.propTypes = {
  handleChange: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
};

export default InputImagePath;
