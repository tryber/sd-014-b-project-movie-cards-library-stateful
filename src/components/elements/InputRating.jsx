import React from 'react';

class InputRating extends React.Component {
  render() {
    const { handleChange, state } = this.props;

    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          value={ state }
          data-testid="rating-input"
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default InputRating;
