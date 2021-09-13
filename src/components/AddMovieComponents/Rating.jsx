import React from 'react';
import PropTypes from 'prop-types';

class AddMovieRating extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <div>
        input=
        { {
          ID: 'rating-input',
          name: 'rating',
          testID: 'rating-input',
          type: 'number',
          value,
          onChange: handleChange,
        } }
        label=
        { { description: 'Avaliação', testIDLabel: 'rating-input-label' } }
      </div>
    );
  }
}

AddMovieRating.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default AddMovieRating;
