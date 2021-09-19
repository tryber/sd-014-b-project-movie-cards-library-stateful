import React from 'react';
import PropTypes from 'prop-types';

class RatingInput extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          name="rating"
          id="rating"
          data-testid="rating-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

RatingInput.propTypes = PropTypes.shape({
  value: PropTypes.number,
  onChange: PropTypes.func,
}).isRequired;

export default RatingInput;
