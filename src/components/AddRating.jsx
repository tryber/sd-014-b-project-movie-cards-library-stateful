import React from 'react';
import PropTypes from 'prop-types';

class AddRating extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor="Avaliação" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          data-testid="rating-input"
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
