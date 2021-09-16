import React from 'react';
import PropTypes from 'prop-types';

class InputSelect extends React.Component {
  render() {
    const { genre, onChange } = this.props;
    return (
      <div>
        <label
          htmlFor="Gênero"
          data-testid="genre-input-label"
        >
          Gênero
          <select
            data-testid="genre-input"
            value={ genre }
            onChange={ onChange }
          >
            <option data-testid="genre-option" value="action">Ação</option>
            <option data-testid="genre-option" value="comedy">Comédia</option>
            <option data-testid="genre-option" value="thriller">Suspense</option>
          </select>
        </label>
      </div>
    );
  }
}

InputSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  genre: PropTypes.func.isRequired,
};

export default InputSelect;
