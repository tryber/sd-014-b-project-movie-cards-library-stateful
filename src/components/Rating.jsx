import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div className="rating">
        <label
          htmlFor="rating"
          data-testid="rating-input-label"
        >
          Avaliação
          <input
            data-testid="rating-input"
            type="number"
            value={ value }
            onChange={ onChange }
            // Consultei o repo da Mariana meu requisito 12 não estava passando em um dos subitens.
            // Referência: https://github.com/tryber/sd-014-b-project-movie-cards-library-stateful/pull/28/commits/0a3eda3a1dfabe0376f24d85edc7c17c1aef6551
          />
        </label>
      </div>
    );
  }
}

Rating.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Rating;
