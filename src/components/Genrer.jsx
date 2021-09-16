import React from 'react';
import PropTypes from 'prop-types';

class Genrer extends React.Component {
  render() {
    const { genre, onChange } = this.props;
    return (
      <div>
        <label data-testid="genre-input-label" htmlFor="genre">
          Gênero
          <select
            value={ genre }
            onChange={ onChange }
            name="genre"
            data-testid="genre-input"
          >
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

Genrer.propTypes = {
  genre: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Genrer;
