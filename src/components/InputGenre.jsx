import React from 'react';

class InputGenre extends React.Component {

  render() {
    const { genre, handleChange } = this.props;
    return (
      <label htmlFor="genre" data-testid="genre-input-label">
        Gênero
        <input
          name="genre"
          value={ genre }
          handleChange={ handleChange }
          data-testid="genre-input"
        />
      </label>

    );
  }
}

export default Inputgenre;
