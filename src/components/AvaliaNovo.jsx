import React from 'react';
import PropTypes from 'prop-types';

class AvaliaNovo extends React.Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label htmlFor="avaliaNovo" data-testid="rating-input-label">
        Avaliação
        <input
          id="avaliaNovo"
          type="number"
          data-testid="rating-input"
          value={ value }
          onChange={ onChange }
          max={ 5 }
        />
      </label>
    );
  }
}

AvaliaNovo.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AvaliaNovo;
