import React from 'react';

class AddRating extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="rating-input" data-testid="rating-input-label">
        Avaliação
        <input
          name="storyline"
          type="number"
          id="storyline-input"
          data-testid="rating-input-label"
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

export default AddRating;
