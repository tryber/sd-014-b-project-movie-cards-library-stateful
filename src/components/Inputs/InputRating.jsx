import React from 'react';
import PropTypes from 'prop-types';

class InputRating extends React.Component {
  render() {
    const { onChange } = this.props;

    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          data-testid="rating-input"
          name="rating"
          id="rating"
          type="number"
          onChange={ onChange }
          required
        />
      </label>
    );
  }
}

InputRating.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default InputRating;
