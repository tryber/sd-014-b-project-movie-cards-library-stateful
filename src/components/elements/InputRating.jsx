import React from 'react';

class InputRating extends React.Component {
  render() {
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          name="rating"
          type="number"
          data-testid="rating-input"
        />
      </label>
    );
  }
}

export default InputRating;
