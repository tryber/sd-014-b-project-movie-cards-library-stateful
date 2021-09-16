import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    // const { title, subtitle, imagePath } = this.state;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          value={ value }
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

RatingInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.func.isRequired,
};

export default RatingInput;
