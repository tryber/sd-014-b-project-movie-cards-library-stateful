import React from 'react';
import PropTypes from 'prop-types';

class SelectGenre extends React.Component {
  render() {
    const { onChange } = this.props;

    return (
      <label htmlFor="genreNewMovie" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          id="genreNewMovie"
          data-testid="genre-input"
          onChange={ onChange }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

SelectGenre.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SelectGenre;
