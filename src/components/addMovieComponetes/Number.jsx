import React from 'react';
import PropTypes from 'prop-types';

class Number extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="number-input">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          id="number-input"
          name="rating"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Number.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Number;
