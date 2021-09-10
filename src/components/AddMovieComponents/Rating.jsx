import React from 'react';
import PropTypes from 'prop-types';
import Template from './InputTemplate';

class AddMovieRating extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <Template
        input={ {
          ID: 'rating-input',
          name: 'rating',
          testID: 'rating-input',
          type: 'number',
          value,
          onChange: handleChange,
        } }
        label={ { description: 'Avaliação', testIDLabel: 'rating-input-label' } }
      />
    );
  }
}

AddMovieRating.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default AddMovieRating;
