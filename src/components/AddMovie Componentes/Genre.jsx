import React from 'react';
import PropType from 'prop-types';

class Genre extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label htmlFor="MovieGenre" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={ value }
          onChange={ handleChange }
          data-testid="genre-input"
        >
          <option value="action">Ação</option>
          <option value="comedy">Ação</option>
          <option value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

Genre.PropType = {
  value: PropType.string.isRequired,
  handleChange: PropType.func.isRequired,
};

export default Genre;
