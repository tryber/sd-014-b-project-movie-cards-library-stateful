import React from 'react';
import PropTypes from 'prop-types';

class RatingForm extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        <input
          name="rating"
          value={ rating }
          data-testid="rating-input"
          onChange={ this.handleInputChange }
        />
      </label>
    );
  }
}

RatingForm.propTypes = { rating: PropTypes.number };

RatingForm.defaultProps = {
  rating: 'undefined',
};

export default RatingForm;
