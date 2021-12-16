import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label
        htmlFor="rating"
        data-testid="rating-input-label"
        className="text-form"
      >
        Avaliação
        <input
          name="rating"
          type="number"
          onChange={ onChange }
          value={ value }
          data-testid="rating-input"
          className="search-input"
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputRating;
