import React from 'react';
import PropTypes from 'prop-types';

class AddRating extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          name="rating"
          type="number"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

AddRating.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AddRating;
