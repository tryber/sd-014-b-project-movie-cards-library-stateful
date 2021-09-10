import React from 'react';
import PropTypes from 'prop-types';

class SelectGenre extends React.Component {
  render() {
    const { genre, onChange } = this.props;
    return (
      <label htmlFor="genreInput" data-testid="genreInputLabel">
        Gênero
        <select
          value={ genre }
          onChange={ onChange }
          data-testid="genreInput"
        >
          <option data-testid="genreOptions" value="action">Ação</option>
          <option data-testid="genreOptions" value="comedy">Comédia</option>
          <option data-testid="genreOptions" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

SelectGenre.propTypes = {
  genre: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectGenre;
