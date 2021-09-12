import React from 'react';
import PropTypes from 'prop-types';

class RatingMovie extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <div className="mb-3">
        <label
          className="form-label"
          data-testid="rating-input-label"
          htmlFor="rating-input"
        >
          Avaliação
        </label>
        <input
          className="form-control"
          type="number"
          name="rating"
          value={ value }
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </div>

    );
  }
}

RatingMovie.defaultProps = {
  value: 0,
};

RatingMovie.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.number,
};

export default RatingMovie;
