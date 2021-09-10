import React from 'react';
import PropTypes from 'prop-types';
import Template from './InputTemplate';

class AddMovieImage extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <Template
        input={ {
          ID: 'image-input',
          name: 'imagePath',
          testID: 'image-input',
          value,
          onChange: handleChange } }
        label={ { description: 'Imagem', testIDLabel: 'image-input-label' } }
      />
    );
  }
}

AddMovieImage.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default AddMovieImage;
