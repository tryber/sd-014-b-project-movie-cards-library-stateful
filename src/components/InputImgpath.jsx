import React from 'react';
import PropTypes from 'prop-types';

class InputImgpath extends React.Component {
  render() {
    const { value, event } = this.props;
    return (
      <label htmlFor="imagePath" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ value }
          data-testid="image-input"
          onChange={ event }
        />
      </label>
    );
  }
}

InputImgpath.propTypes = {
  value: PropTypes.string.isRequired,
  event: PropTypes.func.isRequired,
};

export default InputImgpath;
