import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GenreInput extends Component {
  render() {
    const { genre, onChange } = this.props;

    return (
      <section className="field">
        <label
          className="label genre-select"
          htmlFor="genre"
          data-testid="genre-input-label"
        >
          Gênero
          <div className="select is-rounded">
            <select
              name="genre"
              id="genre-input"
              value={ genre }
              onChange={ onChange }
              data-testid="genre-input"
            >
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comédia</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </div>
        </label>
      </section>
    );
  }
}

GenreInput.propTypes = {
  genre: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default GenreInput;
