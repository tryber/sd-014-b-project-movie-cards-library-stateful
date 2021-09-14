import React from 'react';

class InputRating extends React.Component {

  render() {
    const { rating, handleChange } = this.props;
    return (
      <label htmlFor="rating" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          value={ rating }
          handleChange={ handleChange }
          data-testid="rating-input"
        />
      </label>

    );
  }
}

export default InputRating;
