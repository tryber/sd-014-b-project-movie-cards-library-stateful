import React from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';

class ImageInput extends React.Component {
  render() {
    const { callback, value } = this.props;
    return (
      <FormInput
        text="Imagem"
        labelId="image-input-label"
        myName="imagePath"
        myValue={ value }
        dataId="image-input"
        callback={ callback }
        myType="text"
      />
    );
  }
}

ImageInput.propTypes = {
  callback: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default ImageInput;
