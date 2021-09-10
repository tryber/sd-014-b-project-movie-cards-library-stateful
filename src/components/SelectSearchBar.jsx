import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';

class SelectSearchBar extends React.Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <label className="form-label" htmlFor="select" data-testid="select-input-label">
        Filtrar por gênero:
        <select
          className="form-select"
          value={ value }
          onChange={ handleChange }
          name="selectedGenre"
          id="select"
          data-testid="select-input"
        >
          <option data-testid="select-option" value="">Todos</option>
          <option data-testid="select-option" value="action">Ação</option>
          <option data-testid="select-option" value="comedy">Comédia</option>
          <option data-testid="select-option" value="thriller">Suspense</option>
          <option data-testid="select-option" value="fantasy">Fantasia</option>
          <option data-testid="select-option" value="Science fiction">
            Ficção Ciêntifica
          </option>
        </select>
      </label>
    );
  }
}

SelectSearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SelectSearchBar;
