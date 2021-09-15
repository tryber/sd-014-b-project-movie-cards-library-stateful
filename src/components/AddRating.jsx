import React from 'react';
import PropTypes from 'prop-types';

class AddRating extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          id="rating"
          value={ value }
          type="number"
          data-testid="rating-input"
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddRating.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
}.isRequired;

export default AddRating;
