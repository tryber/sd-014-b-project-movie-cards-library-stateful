import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { genre, handleChange } = this.props;
    return (
      <section>
        <article>
          <label htmlFor="genre" data-testid="genre-input-label">
            Gênero
            <select
              data-testid="genre-input"
              name="genre"
              value={ genre }
              onChange={ handleChange }
              type="text"
            >
              <option data-testid="genre-option" value="action">Ação</option>
              <option data-testid="genre-option" value="comedy">Comédia</option>
              <option data-testid="genre-option" value="thriller">Suspense</option>
            </select>
          </label>
        </article>
      </section>
    );
  }
}

Genre.propTypes = {
  genre: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Genre;
