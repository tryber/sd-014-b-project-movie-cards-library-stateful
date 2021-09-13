import React from 'react';
import PropTypes from 'prop-types';

class AddMovieImage extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <div>
        input=
        { {
          ID: 'image-input',
          name: 'imagePath',
          testID: 'image-input',
          value,
          onChange: handleChange } }
        label=
        { { description: 'Imagem', testIDLabel: 'image-input-label' } }
      </div>
    );
  }
}

AddMovieImage.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default AddMovieImage;
