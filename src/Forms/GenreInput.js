import React from 'react';
import PropTypes from 'prop-types';

class GenreInput extends React.Component {
  render() {
    const { handleChange } = this.props;
    return (
      <label htmlFor="genre-input-input" data-testid="genre-input-label">
        Gênero
        <select
          id="genre-input-input"
          data-testid="genre-input"
          onChange={ handleChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

GenreInput.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
}.isRequered;

export default GenreInput;
