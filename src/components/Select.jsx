import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { name, onChange, value } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="Genero">
        Gênero
        <select
          name={ name }
          value={ value }
          data-testid="genre-input"
          onChange={ onChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

Select.defaultProps = {
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Select;
