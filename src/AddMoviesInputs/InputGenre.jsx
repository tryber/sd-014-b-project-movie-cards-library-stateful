import React from 'react';
import PropTypes from 'prop-types';

class InputGenre extends React.Component {
  render() {
    const { genre } = this.props;
    return (
      <label
        htmlFor="genre-label"
        data-testid="genre-input-label"
      >
        Gênero
        <select
          id="genre-label"
          data-testid="genre-input"
          value={ genre }
          onChange={ genre }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

InputGenre.propTypes = {
  genre: PropTypes.string.isRequired,
};

export default InputGenre;
