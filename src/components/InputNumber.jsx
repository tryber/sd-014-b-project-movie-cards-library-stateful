import React from 'react';
import PropTypes from 'prop-types';

class InputNumber extends React.Component {
  render() {
    const { rating, handleChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          id="rating"
          name="rating"
          value={ rating }
          type="number"
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

InputNumber.propTypes = {
  rating: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputNumber;

/*
Extraímos cada input para um componente
importamos react e proptype
criamos componente de classe
atualizamos as props que vamos usar
e deixamos dinâmico
validamos as props com o tipo que será inserido, rating numero e handle função
*/
