import React from 'react';
import PropTypes from 'prop-types';

class Ranking extends React.Component {
  render() {
    const { value, callback } = this.props;
    return (
      <div>
        <label data-testid="rating-input-label" htmlFor="rating-input">
          Avaliação
          <input
            type="number"
            value={ value }
            onChange={ callback }
            name="rating"
            data-testid="rating-input"
          />
        </label>
      </div>
    );
  }
}

Ranking.propTypes = {
  value: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Ranking;
