import React from 'react';
import PropTypes from 'prop-types';

class AddMovieRating extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="image" data-testid="image-input-label">
        Imagem
        <input
          name="imagePath"
          type="text"
          id="image"
          data-testid="image-input"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

AddMovieRating.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default AddMovieRating;
